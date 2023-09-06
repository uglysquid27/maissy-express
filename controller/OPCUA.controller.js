// REQUIREMENT AND IMPORTING
// const modelsStatic = require('./../config/sequelizeStatic');
const {
  AttributeIds,
  OPCUAClient,
  MessageSecurityMode,
  SecurityPolicy,
  ClientSubscription,
  ClientMonitoredItem,
  TimestampsToReturn,
} = require("node-opcua");
const allModel = require("../models/AllModels");
const sequelize = require("../config/sequelizeCRUD");
// const system = require('./../models/system');
const endpointUrl = "opc.tcp://192.168.9.8:4840";
const connectionStrategy = {
  initialDelay: 1000,
  maxRetry: 1,
};
const options = {
  applicationName: "MyClient",
  connectionStrategy: connectionStrategy,
  securityMode: MessageSecurityMode.None,
  securityPolicy: SecurityPolicy.None,
  endpointMustExist: false,
};
var client = OPCUAClient.create(options);
var moment = require("moment");
const CollectorCtrl = require("./Collector.controller");
var session;
var subscription;
var value = new Map();
var nodeLength = 0;
var countTime = 0;

async function main() {
  try {
    // allModel.generate();
    console.log("connecting");
    // step 1 : connect to
    await client.connect(endpointUrl);
    console.log("connected !");

    // step 2 : createSession
    session = await client.createSession();
    console.log("session created !");

    // step 3 : Setting up subscription
    // ------- initialize subscription -----------
    initializeSubscription();
    // ------- update subscription -----------
    updateSubscription();
    // get lotno and pro
    // updateIdentity();
  } catch (err) {
    console.log(" Cannot connect to " + endpointUrl);
    console.log(" Error = ", err.message);
    return;
  }
}
// main();

function initializeSubscription() {
  subscription = ClientSubscription.create(session, {
    requestedPublishingInterval: 100,
    requestedLifetimeCount: 100,
    requestedMaxKeepAliveCount: 100,
    maxNotificationsPerPublish: 100,
    publishingEnabled: true,
    priority: 1,
  });
  console.log("subscription initialized");
}

function deleteAllSubcription() {
  subscription.terminate();
  console.log("all subscription deleted");
}

function updateSubscription() {
  // delete all subscription
  deleteAllSubcription();
  // initialize again
  initializeSubscription();
  // console.log('updating');

  // step 1 : create subscription for all value on model
  for (var table of Object.keys(allModel.obj)) {
    // console.log(table);
    for (var column of Object.keys(allModel.obj[table])) {
      // console.log(column);
      subscribeValue(allModel.obj[table][column], table, "OCI1"); //line, table, column, model
      nodeLength++;
    }
  }
}

async function getValue(model) {
  if (client === undefined) {
    main();
  }
  return model.value;
}

async function readValue(nodeId) {
  const dataValue2 = await session.readVariableValue(nodeId);
  return dataValue2.value.value;
}

async function forceUpdate(nodeId) {
  var tempValue = await readValue(nodeId);
  //console.log(nodeId, tempValue);
  value.set(nodeId, tempValue);
}

var value1 = [];

async function subscribeValue(model, table, area) {
  // console.log(area);
  //console.log(line, table, column, model.node);
  //console.log(name, nodeId);

  const itemToMonitor = {
    nodeId: model.node,
    attributeId: AttributeIds.Value,
  };
  const parameters = {
    samplingInterval: 100,
    discardOldest: true,
    queueSize: 30,
  };

  const monitoredItem = ClientMonitoredItem.create(
    subscription,
    itemToMonitor,
    parameters,
    TimestampsToReturn.Both
  );

  monitoredItem.on("changed", async (dataValue) => {
    // console.log(model.column + " " + dataValue.value);
    // console.log(table);

    // GETING VALUE AND INSERT INTO MODEL
    var valueTemp = dataValue.value.value;
    if (model.decimal !== "string") {
      valueTemp =
        Math.round(dataValue.value.value * model.decimal * 1000) / 1000;
    }
    model.status_value = "updated";
    model.last_update = moment().format("YYYY-MM-DD HH:mm:ss");
    model.value = valueTemp;
    value.set(model.column + "-" + model.node, valueTemp);

    // INSERTING DATA INTO DATABASE
    var time = moment().format('YYYY-MM-DD HH:mm:ss');
    // console.log(model.column + " " + valueTemp + " " + time);
    sequelize.insert(table, model.column, valueTemp);
    
  });
  /*
  async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  await timeout(10000);

  console.log("now terminating subscription");
  await subscription.terminate();*/
}

function isSameSize() {
  var tens = Math.floor((nodeLength / 10) % 10) * 10;
  console.log(value.size, nodeLength);
  return value.size >= tens;
}

function getColumns(table) {
  // console.log(table);
  var columns = [];
  for (var key of Object.keys(table)) {
    // console.log(table[key]['column']);
    columns.push(table[key]["column"]);
  }
  return columns;
}

function wait(time) {
  var cond = false;
  if (time === countTime) {
    cond = true;
  } else {
    countTime++;
  }
  return cond;
}

module.exports = {
  main,
  getValue,
  readValue,
  isSameSize,
  forceUpdate,
  getColumns,
  updateSubscription,
  wait,
};
