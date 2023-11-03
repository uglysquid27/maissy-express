var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

const amDashboardController = require("../controller/am-dasboard-controller");

router.get('/totalf',amDashboardController.read);
router.get('/temuanharian',amDashboardController.temuanharian);
router.get('/totalreadpendingexecute',amDashboardController.readpendingexecute);
router.get('/totalreadreadyexecute', amDashboardController.readreadyexecute);
router.get('/totalreadfinishexecute', amDashboardController.readfinishexecute);
router.get('/totalfindingm',amDashboardController.readTotalFindingM);
router.get('/totalpendingexecutem',amDashboardController.readpendingexecutem);
router.get('/totalreadyexecutem',amDashboardController.readreadyexecutem);
router.get('/totalfinishexecutem',amDashboardController.readfinishexecutem);
router.get('/findingpending',amDashboardController.findingpending);
router.get('/funcloc',amDashboardController.funcloc);
router.get('/funclococi2',amDashboardController.funclococi2);
router.get('/funclocfsb',amDashboardController.funclocfsb);
router.get('/findingpendingsection',amDashboardController.findingpendingsection);
router.get('/findingpendingsectionoci2',amDashboardController.findingpendingsectionoci2);
router.get('/findingpendingsectionfsb',amDashboardController.findingpendingsectionfsb);
router.get('/levelam',amDashboardController.levelam);
router.get('/totalfindingmoci2',amDashboardController.readTotalFindingMoci2);
router.get('/totalpendingexecutemoci2',amDashboardController.readpendingexecutemoci2);
router.get('/totalreadyexecutemoci2',amDashboardController.readreadyexecutemoci2);
router.get('/totalfinishexecutemoci2',amDashboardController.readfinishexecutemoci2);
router.get('/findingpendingoci2',amDashboardController.findingpendingoci2);
router.get('/levelamoci2',amDashboardController.levelamoci2);
router.get('/totalfindingmfsb',amDashboardController.readTotalFindingMfsb);
router.get('/totalpendingexecutemfsb',amDashboardController.readpendingexecutemfsb);
router.get('/totalreadyexecutemfsb',amDashboardController.readreadyexecutemfsb);
router.get('/totalfinishexecutemfsb',amDashboardController.readfinishexecutemfsb);
router.get('/findingpendingfsb',amDashboardController.findingpendingfsb);
router.get('/findingpendingutileng', amDashboardController.findingpendingutileng);
router.get('/levelamutileng', amDashboardController.levelamutileng);
router.get('/levelamfsb',amDashboardController.levelamfsb);
router.get('/kategori',amDashboardController.kategori);
router.get('/getorder',amDashboardController.getOrder);
router.get('/total1year',amDashboardController.totaldata1year);
router.post('/totaldatapost', amDashboardController.totaldatapost);
router.get('/totalfeeding', amDashboardController.totalfeeding);
router.get('/totalapproval', amDashboardController.totalapproval);
router.post('/totalapprovalorderfinish', amDashboardController.totalapprovalorderfinish);
router.post('/totalapprovalshcedule', amDashboardController.totalapprovalshcedule);
router.post('/totalapprovalcreateorder', amDashboardController.totalapprovalcreateorder);
router.post('/totalapprovalspv', amDashboardController.totalapprovalspv);
router.post('/totalapprovalreadyexecution', amDashboardController.totalapprovalreadyexecution);
router.post('/reportingharianam',amDashboardController.reportingharianam);
router.post('/totalpartreporting',amDashboardController.totalpartreporting);

module.exports = router;