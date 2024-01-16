var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

const prDashboardController = require("../controller/pr-dashboard-controller");

router.get('/totalreq', prDashboardController.totalRequest);
router.get('/totalprnumber', prDashboardController.totalRequestWithNumber);
router.get('/totalvendor1', prDashboardController.totalRequest1vendor);
router.get('/totalvendor2', prDashboardController.totalRequest2vendor);

module.exports = router;