var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

const alarmController = require("../controller/live-alarm-controller");

router.get('/read',alarmController.read);

module.exports = router;