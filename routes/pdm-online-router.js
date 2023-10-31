var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

const pdmDashboardController = require("../controller/pdm-online-controller");

router.post('/store', pdmDashboardController.store);
router.get('/limit', pdmDashboardController.limit);
router.get('/tables', pdmDashboardController.node_tables);
router.get('/cv_pack1', pdmDashboardController.cvpack1);
router.get('/coba', pdmDashboardController.try);

module.exports = router;
  