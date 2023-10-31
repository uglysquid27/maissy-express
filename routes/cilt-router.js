var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

const ciltController = require("../controller/cilt-dashboard-controller");

router.get('/curcycle', ciltController.currentcycle);
router.get('/ciltoci1', ciltController.ciltreportoci1);
router.get('/ciltoci2', ciltController.ciltreportoci2);
router.get('/ciltfsb', ciltController.ciltreportfsb);

module.exports = router;
