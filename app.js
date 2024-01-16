var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const xlsx = require("xlsx");
const sequelize = require('./config/sequelizeCRUD');
const workbook = xlsx.readFile(path.join(__dirname,'Node Alarm OPCUA.xlsx'));
const db = require('./models/relation');
const allModel = require("./models/AllModels");
var cron = require("node-cron");
const multer = require("multer");
const upload = multer();
// console.log(workbook);
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var apisRouter = require('./routes/api');
var amRouter = require('./routes/am-router');
var pdmRouter = require('./routes/pdm-router');
var pdmOnRouter = require('./routes/pdm-online-router');
var costRouter = require('./routes/cost-router');
var ciltRouter = require('./routes/cilt-router');
var alarmRouer = require('./routes/alarm');
var indexRouter = require('./routes/index');
var prRouter = require('./routes/pr-router');
// var authRouter = require('./routes/auth');

var OPCUACtrl = require("./controller/OPCUA.controller");
// var CollectorCtrl = require("./controllers/Collector.controller");
// var SocketCtrl = require("./controllers/Socket.controller");

var app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(upload.none())

app.use('/', apisRouter);
app.use('/am', amRouter);
app.use('/pdm', pdmRouter);
app.use('/pdm-online', pdmOnRouter);
app.use('/cost', costRouter);
app.use('/cilt', ciltRouter);
app.use('/alarm', alarmRouer);
app.use('/index', indexRouter);
app.use('/pr', prRouter);
// app.use('/users', usersRouter);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function first() {
 
  for (var sheetIndex = 0; sheetIndex < workbook.SheetNames.length; sheetIndex++) {
    const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

    // INSERT DATA TABLE FROM EXEL
    var model = {};
    for (let z in worksheet) {
      let length = z.length;
      let row = z.substring(1, length);
      let rowInt = Number(row);
      if (rowInt == 2) {
        if (worksheet[z].v == "node") {
        } else if (worksheet[z].v == "deskripsi") {
        } else if (worksheet[z].v == null) {
        } else {
          // console.log(worksheet[z].v);
          model[worksheet[z].v] = {};
          db.table.findOne({ where: { name: worksheet[z].v } }
          ).then(async function (data) {
            if (!data) {
              await db.table.create({ name: worksheet[z].v });
              sequelize.creatTable(worksheet[z].v);
            }
          });
        }
      }
    }
  };
  for (var sheetIndex = 0; sheetIndex < workbook.SheetNames.length; sheetIndex++) {
    const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

    // INSERT DATA TABLE FROM EXEL
    var model = {};
    for (let z in worksheet) {
      let length = z.length;
      let row = z.substring(1, length);
      let rowInt = Number(row);
      if (rowInt == 2) {
        if (worksheet[z].v == "node") {
        } else if (worksheet[z].v == "deskripsi") {
        } else if (worksheet[z].v == null) {
        } else {
          model[worksheet[z].v] = {};
          db.table.findOne({ where: { name: worksheet[z].v } }
          ).then(async function (data) {
            if (!data) {
              await db.table.create({ name: worksheet[z].v });
              sequelize.creatTable(worksheet[z].v);
            }
          });
        }
      }
    }

    // INSERT DATA ALARM FROM EXEL
    var n = 0;
    for (let k in model) {
      // console.log(k);
      var chr = String.fromCharCode(65 + n);
      var chr1 = String.fromCharCode(65 + (n + 1));
      var chr2 = String.fromCharCode(65 + (n + 2));
      for (let y in worksheet) {
        let length = y.length;
        let row = y.substring(1, length);
        let rowInt = Number(row);
        // console.log(rowInt);
        if (rowInt > 2) {
          var index1 = chr.toString() + rowInt.toString();
          var index2 = chr1.toString() + rowInt.toString();
          var index3 = chr2.toString() + rowInt.toString();
          // console.log(index1+" "+index2+" "+index3);
          const devicee = worksheet[index1];
          const nodee = worksheet[index2];
          const deskripsii = worksheet[index3];
          if (devicee !== undefined) {
            // console.log(devicee.v);
            await db.table.findOne({ where: { name: k.toString() } }
            ).then(async function (data) {
              const { id } = data;
              idd = id;
              var input = {
                device: devicee.v,
                node: nodee.v,
                description: deskripsii.v,
                tableId: id
              };
              await db.alarm.findOne({ 
                where: {
                  device: devicee.v,
                  node: nodee.v,
              }}
              ).then(async function (data1) {
                if (!data1) {
                  await db.alarm.create(input);
                }
              });
            });
          }
          // console.log(devicee);
        }
      }
      // console.log(arr);
      // console.log(n);
      n += 3;
    }
  };
  allModel.generate();
  OPCUACtrl.main();
  // |-------------- PLEASE DON'T MODIFY THIS SECTION -------------------
  //scheduler per 6 hours for resfresh subscription data
  cron.schedule("0 */6 * * *", function () {
    allModel.generate();
    OPCUACtrl.updateSubscription();
    //CollectorCtrl.getNullValue();
  });

  //scheduler LN OC1 per 10detik
  // cron.schedule("*/10 * * * * *", function () {
  //   console.log("--------------------------");
  //   // OPCUACtrl.updateIdentity();
  //   if (OPCUACtrl.wait(2)) {
  //     // wait 1 seconds
  //     CollectorCtrl.cttn_ln2keyence1();
  //   }
  //   //CollectorCtrl.getNullValue();
  // });
  // |-------------- END OF THIS SECTION -------------------
};
// first();

module.exports = app;
 