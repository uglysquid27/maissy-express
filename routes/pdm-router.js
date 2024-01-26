var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

const pdmDashboardController = require("../controller/pdm-dashboard-controllers");

router.get('/totalpdmasset', pdmDashboardController.readtotalasset);
router.get('/totalpdmassetoci1', pdmDashboardController.readtotalassetoci1);
router.get('/pdmassetoci1', pdmDashboardController.readassetoci1);
router.get('/pdmassetoci2', pdmDashboardController.readassetoci2);
router.get('/pdmassetfsb', pdmDashboardController.readassetfsb);
router.get('/totalpdmassetoci2', pdmDashboardController.readtotalassetoci2);
router.get('/totalpdmassetfsb', pdmDashboardController.readtotalassetfsb);
router.get('/totalreadfinishpdm',pdmDashboardController.readtotalfinish);
router.get('/totalreadfinishpdmoci1',pdmDashboardController.readtotalfinishoci1);
router.get('/totalreadfinishpdmoci2',pdmDashboardController.readtotalfinishoci2);
router.get('/totalreadfinishpdmfsb',pdmDashboardController.readtotalfinishfsb);
router.get('/totalgoodandsatis',pdmDashboardController.readgoodandsatis);
router.get('/totalgoodandsatisoci1',pdmDashboardController.readgoodandsatisoci1);
router.get('/totalgoodandsatisoci2',pdmDashboardController.readgoodandsatisoci2);
router.get('/totalgoodandsatisfsb',pdmDashboardController.readgoodandsatisfsb);
router.get('/totalgoodandsatisoci1y',pdmDashboardController.readgoodandsatisoci1y);
router.get('/totalgoodandsatisoci2y',pdmDashboardController.readgoodandsatisoci2y);
router.get('/totalgoodandsatisfsby',pdmDashboardController.readgoodandsatisfsby);
router.get('/totalunsatisunac',pdmDashboardController.unsatisunac);
router.get('/totalunsatisunacoci1',pdmDashboardController.unsatisunacoci1);
router.get('/totalunsatisunacoci2',pdmDashboardController.unsatisunacoci2);
router.get('/totalunsatisunacfsb',pdmDashboardController.unsatisunacfsb);
router.get('/totalasetoci1',pdmDashboardController.assetoci1);
router.get('/totalasetoci2',pdmDashboardController.assetoci2);
router.get('/totalasetfsb',pdmDashboardController.assetfsb);
router.get('/totaloci1good',pdmDashboardController.oci1good);
router.get('/totaloci1satis',pdmDashboardController.oci1satis);
router.get('/totaloci1unsatis',pdmDashboardController.oci1unsatis);
router.get('/totaloci1unacc',pdmDashboardController.oci1unacc);
router.get('/totaloci2good',pdmDashboardController.oci2good);
router.get('/totaloci2satis',pdmDashboardController.oci2satis);
router.get('/totaloci2unsatis',pdmDashboardController.oci2unsatis);
router.get('/totaloci2unacc',pdmDashboardController.oci2unacc);
router.get('/totalfsbgood',pdmDashboardController.FSBgood);
router.get('/totalfsbsatis',pdmDashboardController.FSBsatis);
router.get('/totalfsbunsatis',pdmDashboardController.FSBunsatis);
router.get('/totalfsbunacc',pdmDashboardController.FSBunacc);
router.post('/finishtodaylistoci1',pdmDashboardController.finishtodaylistoci1);
router.post('/finishtodaylistoci1devicename',pdmDashboardController.finishtodaylistoci1byname);
router.post('/historycheckoci1',pdmDashboardController.historycheckoci1);
router.post('/historycheckoci2',pdmDashboardController.historycheckoci2);
router.post('/historycheckfsb',pdmDashboardController.historycheckfsb);
router.get('/finishtodaylistoci1testname',pdmDashboardController.finishtodaylistoci1testname);
router.post('/finishtodaylistoci2',pdmDashboardController.finishtodaylistoci2);
router.post('/finishtodaylistfsb',pdmDashboardController.finishtodaylistfsb);
router.get('/finishtodaylistoci1abnormal',pdmDashboardController.finishtodaylistoci1abnormal);
router.get('/finishtodaylistoci2abnormal',pdmDashboardController.finishtodaylistoci2abnormal);
router.get('/finishtodaylistfsbabnormal',pdmDashboardController.finishtodaylistfsbabnormal);
router.get('/vibrationlineoci1',pdmDashboardController.vibrationlineoci1);
router.get('/vibrationlineoci2',pdmDashboardController.vibrationlineoci2);
router.get('/vibrationlinefsb',pdmDashboardController.vibrationlinefsb);
router.get('/amperelineoci1',pdmDashboardController.amperelineoci1);
router.get('/amperelineoci2',pdmDashboardController.amperelineoci2);
router.get('/amperelinefsb',pdmDashboardController.amperelinefsb);
router.get('/temperaturelineoci1',pdmDashboardController.temperaturelineoci1);
router.get('/temperaturelineoci2',pdmDashboardController.temperaturelineoci2);
router.get('/temperaturelinefsb',pdmDashboardController.temperaturelinefsb);
router.get('/notepdm',pdmDashboardController.notepdm);
router.get('/oci1fnotfinish',pdmDashboardController.oci1fnotfinish);
router.get('/oci2fnotfinish',pdmDashboardController.oci2fnotfinish);
router.get('/fsbffinish',pdmDashboardController.fsbffinish);
router.get('/fsbfnotfinish',pdmDashboardController.fsbfnotfinish);
router.post('/oci1valuepermonth',pdmDashboardController.oci1valuepermonth);
router.post('/oci2valuepermonth',pdmDashboardController.oci2valuepermonth);
router.post('/fsbvaluepermonth',pdmDashboardController.fsbvaluepermonth);
router.get('/dimas',pdmDashboardController.dimas);

module.exports = router;
