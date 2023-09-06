"use strict";

// REQUIREMENT AND IMPORTING
const OPCUA = require("./OPCUA.controller");
// const modelOCI1 = require("../models/OCI1");
// const modelOCI2 = require("../models/OCI2");
// const modelBLOW1 = require("../models/BLOW1");
// const modelBLOW2 = require("../models/BLOW2");
// // const system = require('./../models/system');
var moment = require("moment");
// const sequelize = require("../config/sequelize");
// // const modelsStatic = require('./../config/sequelizeStatic');
var socketIO;
// const fetch = require('node-fetch');
// // const botToken = '1449513217:AAH5rFDy9jKFZcQDy42zAeQLsqJ1bx4ryNc';

// console.log(obj);

//////////////////
// COLECT VALUE //
//////////////////
// async function colectOCI1(_name) {
//   //   console.log(_name);
//   // |--------- Initalize model to be used on this table --------------
//   // var model = modelOCI1.coba[_name];
//   var model = modelOCI1.obj[_name];
//   // |---------Get all column from table------------
//   var columns = OPCUA.getColumns(model);
//   // | adding additional field
//   // columns.push('epochtime');
//   // columns.push('time');
//   // columns.push('plc_time');
//   // columns.push('lotno1');
//   // columns.push('prod_order1');
//   // |---------Get All value from OPCUA------------
//   var value = [];
//   // | Looping properties
//   for (var key of Object.keys(model)) {
//     // console.log(model[key].value);
//     var nodeVal = model[key].value;
//     if (nodeVal === undefined) {
//       nodeVal = "NULL";
//     }
//     value.push(nodeVal);
//   }
//   // | Get identity from table (1 mean OCI1)
//   // var identity = OPCUA.getIdentity('1');
//   // | Set ID for data (different between PLC time and local time is 5 seconds)
//   var time = moment().format("YYYY-MM-DD HH:mm:ss");
//   // | Adding value for additional field, the order must be the same
//   value.push("UNIX_TIMESTAMP ('" + time + "')"); // epochtime
//   value.push("'" + time + "'"); //time
//   // value.push("'" + moment(system.time.CurrentTime.value).tz('ETC/GMT').format('YYYY-MM-DD HH:mm:ss') + "'"); //plc_time
//   // value.push("'" + identity.lotno + "'"); //lotno
//   // value.push("'" + identity.prod_order + "'"); //prod_order
//   // | Logging table, column and value
//   logValues(_name.toString(), columns, value, time);
//   // | Checking all outspec value
//   //checkOutspecValue('cttn_ln2keyence1',model, identity, time);
//   //checkPreAlarm('cttn_ln2keyence1', model, identity, time);
//   // | Inserting data to database
//   // insertIntoDatabase(_name, columns, value, time, modelOCI1.obj);
//   // delete last element from table
//   //deleteFromDatabase('cttn_ln2keyence1');
// }

// async function colectOCI2(_name) {
//   // console.log(modelOCI2.obj[_name]);
//   // |--------- Initalize model to be used on this table --------------
//   //   var model = modelOCI1.coba[_name];
//   var model = modelOCI2.obj[_name];
//   // |---------Get all column from table------------
//   var columns = OPCUA.getColumns(model);
//   // | adding additional field
//   // columns.push('epochtime');
//   // columns.push('time');
//   // columns.push('plc_time');
//   // columns.push('lotno1');
//   // columns.push('prod_order1');
//   // |---------Get All value from OPCUA------------
//   var value = [];
//   // | Looping properties
//   for (var key of Object.keys(model)) {
//     // console.log(model[key].value);
//     var nodeVal = model[key].value;
//     if (nodeVal === undefined) {
//       nodeVal = "NULL";
//     }
//     value.push(nodeVal);
//   }
//   // | Get identity from table (1 mean OCI1)
//   // var identity = OPCUA.getIdentity('1');
//   // | Set ID for data (different between PLC time and local time is 5 seconds)
//   var time = moment().format("YYYY-MM-DD HH:mm:ss");
//   // | Adding value for additional field, the order must be the same
//   value.push("UNIX_TIMESTAMP ('" + time + "')"); // epochtime
//   value.push("'" + time + "'"); //time
//   // value.push("'" + moment(system.time.CurrentTime.value).tz('ETC/GMT').format('YYYY-MM-DD HH:mm:ss') + "'"); //plc_time
//   // value.push("'" + identity.lotno + "'"); //lotno
//   // value.push("'" + identity.prod_order + "'"); //prod_order
//   // | Logging table, column and value
//   logValues(_name.toString(), columns, value, time);
//   // | Checking all outspec value
//   //checkOutspecValue('cttn_ln2keyence1',model, identity, time);
//   //checkPreAlarm('cttn_ln2keyence1', model, identity, time);
//   // | Inserting data to database
//   // insertIntoDatabase('cttn_ln2keyence1', columns, value, time);
//   // delete last element from table
//   //deleteFromDatabase('cttn_ln2keyence1');
// }

// async function colectBLOW1(_name) {
//   console.log(_name);
//   // |--------- Initalize model to be used on this table --------------
//   // var model = modelOCI1.coba[_name];
//   var model = modelBLOW1.obj[_name];
//   // |---------Get all column from table------------
//   var columns = OPCUA.getColumns(model);
//   // | adding additional field
//   // columns.push('epochtime');
//   // columns.push('time');
//   // columns.push('plc_time');
//   // columns.push('lotno1');
//   // columns.push('prod_order1');
//   // |---------Get All value from OPCUA------------
//   var value = [];
//   // | Looping properties
//   for (var key of Object.keys(model)) {
//     // console.log(model[key].value);
//     var nodeVal = model[key].value;
//     if (nodeVal === undefined) {
//       nodeVal = "NULL";
//     }
//     value.push(nodeVal);
//   }
//   // | Get identity from table (1 mean OCI1)
//   // var identity = OPCUA.getIdentity('1');
//   // | Set ID for data (different between PLC time and local time is 5 seconds)
//   var time = moment().format("YYYY-MM-DD HH:mm:ss");
//   // | Adding value for additional field, the order must be the same
//   value.push("UNIX_TIMESTAMP ('" + time + "')"); // epochtime
//   value.push("'" + time + "'"); //time
//   // value.push("'" + moment(system.time.CurrentTime.value).tz('ETC/GMT').format('YYYY-MM-DD HH:mm:ss') + "'"); //plc_time
//   // value.push("'" + identity.lotno + "'"); //lotno
//   // value.push("'" + identity.prod_order + "'"); //prod_order
//   // | Logging table, column and value
//   logValues(_name.toString(), columns, value, time);
//   // | Checking all outspec value
//   //checkOutspecValue('cttn_ln2keyence1',model, identity, time);
//   //checkPreAlarm('cttn_ln2keyence1', model, identity, time);
//   // | Inserting data to database
//   // insertIntoDatabase('cttn_ln2keyence1', columns, value, time);
//   // delete last element from table
//   //deleteFromDatabase('cttn_ln2keyence1');
// }

// async function colectBLOW2(_name) {
//   //   console.log(_name);
//   // |--------- Initalize model to be used on this table --------------
//   // var model = modelOCI1.coba[_name];
//   var model = modelBLOW2.obj[_name];
//   // |---------Get all column from table------------
//   var columns = OPCUA.getColumns(model);
//   // | adding additional field
//   // columns.push('epochtime');
//   // columns.push('time');
//   // columns.push('plc_time');
//   // columns.push('lotno1');
//   // columns.push('prod_order1');
//   // |---------Get All value from OPCUA------------
//   var value = [];
//   // | Looping properties
//   for (var key of Object.keys(model)) {
//     // console.log(model[key].value);
//     var nodeVal = model[key].value;
//     if (nodeVal === undefined) {
//       nodeVal = "NULL";
//     }
//     value.push(nodeVal);
//   }
//   // | Get identity from table (1 mean OCI1)
//   // var identity = OPCUA.getIdentity('1');
//   // | Set ID for data (different between PLC time and local time is 5 seconds)
//   var time = moment().format("YYYY-MM-DD HH:mm:ss");
//   // | Adding value for additional field, the order must be the same
//   value.push("UNIX_TIMESTAMP ('" + time + "')"); // epochtime
//   value.push("'" + time + "'"); //time
//   // value.push("'" + moment(system.time.CurrentTime.value).tz('ETC/GMT').format('YYYY-MM-DD HH:mm:ss') + "'"); //plc_time
//   // value.push("'" + identity.lotno + "'"); //lotno
//   // value.push("'" + identity.prod_order + "'"); //prod_order
//   // | Logging table, column and value
//   logValues(_name.toString(), columns, value, time);
//   // | Checking all outspec value
//   //checkOutspecValue('cttn_ln2keyence1',model, identity, time);
//   //checkPreAlarm('cttn_ln2keyence1', model, identity, time);
//   // | Inserting data to database
//   // insertIntoDatabase('cttn_ln2keyence1', columns, value, time);
//   // delete last element from table
//   //deleteFromDatabase('cttn_ln2keyence1');
// }
/////////////////////////
// END OF COLECT VALUE //
/////////////////////////

// ---------------------------------------------------------------------------------
////////////////////////
// INSERT TO DATABASE //
////////////////////////
// function insertIntoDatabase(table, columns, data) {
//   sequelize.insert(table,columns,data);
// }

// /////////////////
// // CONSOLE LOG //
// /////////////////
// function logValues(table, columns, data, time) {
//   console.log(table);
//   // console.log(columns.toString());
//   console.log(data.toString());
// }

//////////////////////////
// DELETE FROM DATABASE //
//////////////////////////
// function deleteFromDatabase(table) {
// 	modelsStatic.localDB.query(
// 	    "DELETE FROM " + table + " ORDER BY epochtime LIMIT 1", {
// 	    	type: modelsStatic.localDB.QueryTypes.DELETE
// 	    })
// 	.then(function (result) {});
// }

function setIO(io) {
  socketIO = io;
}

// EXPORTING FOR ANOTHER FILE
module.exports = {
  // colectOCI1,
  // colectOCI2,
  // colectBLOW1,
  // colectBLOW2,
  setIO,
  // logValues,
  // insertIntoDatabase,
};
