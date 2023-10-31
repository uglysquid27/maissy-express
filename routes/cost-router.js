var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

const costDashboardController = require("../controller/cost-dashboard-controller");

router.get('/costoci1', costDashboardController.costmonitoringoci1);
router.get('/costoci1past', costDashboardController.costmonitoringoci1past);
router.get('/fgoci1', costDashboardController.finishgoodoci1);
router.get('/costoci2', costDashboardController.costmonitoringoci2);
router.get('/costoci2past', costDashboardController.costmonitoringoci2past);
router.get('/fgoci2', costDashboardController.finishgoodoci2);
router.get('/costfsb', costDashboardController.costmonitoringfsb);
router.get('/costfsbpast', costDashboardController.costmonitoringfsbpast);
router.get('/fgfsb', costDashboardController.finishgoodfsb);

module.exports = router;