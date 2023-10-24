var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

const tableController = require("../controller/mst-table-controllers");
const big5Controller = require("../controller/big5-dasboard-controllers");
const alarmController = require("../controller/mst-alarm-controllers");
const authController = require("../controller/auth.controllers");
const amDashboardController = require("../controller/am-dasboard-controller");

const kluberController = require("../controller/kluber-controller");
const documentationController = require("../controller/sms-doc-controller");
// const authController = require("./../controller/auth.controllers");

/////////////////////
// ROUTE FOR AUTH //
/////////////////////
router.post("/signin", authController.signin);

/////////////////////
// ROUTE FOR TABLE //
/////////////////////
router.post('/table/create', tableController.create);
router.get('/table/get', tableController.read);
router.get('/table/getbyid', tableController.readbyid);
router.post('/table/update', tableController.update);
router.delete('/table/delete', tableController.delete);

/////////////////////
// ROUTE FOR ALARM //
/////////////////////
router.post('/alarm/create', alarmController.create);
router.get('/alarm/get', alarmController.read);
router.get('/alarm/getbyid', alarmController.readbyid);
router.post('/alarm/update', alarmController.update);
router.delete('/alarm/delete', alarmController.delete);



/////////////////////////////
// ROUTE FOR DASHBOARD PDM //
/////////////////////////////


///////////////////////////////
// ROUTE FOR COST MONITORING //
///////////////////////////////
router.get('/costoci1', amDashboardController.costmonitoringoci1);
router.get('/costoci1past', amDashboardController.costmonitoringoci1past);
router.get('/fgoci1', amDashboardController.finishgoodoci1);
router.get('/costoci2', amDashboardController.costmonitoringoci2);
router.get('/costoci2past', amDashboardController.costmonitoringoci2past);
router.get('/fgoci2', amDashboardController.finishgoodoci2);
router.get('/costfsb', amDashboardController.costmonitoringfsb);
router.get('/costfsbpast', amDashboardController.costmonitoringfsbpast);
router.get('/fgfsb', amDashboardController.finishgoodfsb);

///////////////////////////////
// ROUTE FOR COST MONITORING //
///////////////////////////////
router.get('/curcycle', amDashboardController.currentcycle);
router.get('/ciltoci1', amDashboardController.ciltreportoci1);
router.get('/ciltoci2', amDashboardController.ciltreportoci2);
router.get('/ciltfsb', amDashboardController.ciltreportfsb);

//////////////////////////////
// ROUTE FOR DASHBOARD BIG5 //
//////////////////////////////
router.get('/big5/get', big5Controller.read);
router.post('/big5/getbyid', big5Controller.readbyid);
router.post('/big5/getbydate', big5Controller.readbydate);

//////////////////////////////
//ROUTE FOR DASHBOARD KLUBER//
//////////////////////////////
router.get('/oilproduct', kluberController.oilproduct);
router.get('/greaseproduct', kluberController.greaseproduct);
router.get('/spraysproduct', kluberController.spraysproduct);
router.get('/maintenanceproduct', kluberController.maintenanceproduct);
router.get('/pasteproduct', kluberController.pasteproduct);
router.get('/injection', kluberController.injectionmolder);
router.get('/bottle', kluberController.bottleshower);
router.get('/fillerpetline1', kluberController.fillerpetline1);
router.get('/krones', kluberController.krones);
router.get('/sanyu', kluberController.sanyu);
router.get('/labeller', kluberController.labeller);
router.get('/divider', kluberController.divider);
router.get('/sheetfeeder', kluberController.sheetfeeder);
router.get('/shrinktray', kluberController.shrinktray);
router.get('/packconveyor', kluberController.packconveyor);
router.get('/palletconveyor', kluberController.palletconveyor);
router.get('/palletiser', kluberController.palletiser);
router.get('/packroller', kluberController.packroller);
router.get('/injectionmolderpt2', kluberController.injectionmolderpt2);
router.get('/bottleblowerpt2', kluberController.bottleblowerpt2);
router.get('/fillerpt2', kluberController.fillerpt2);
router.get('/conveyorpt2', kluberController.conveyorpt2);
router.get('/labellerpt2', kluberController.labellerpt2);
router.get('/sanyupt2', kluberController.sanyupt2);
router.get('/caserpt2', kluberController.caserpt2);
router.get('/sheetfeederpt2', kluberController.sheetfeederpt2);
router.get('/packconveyorpt2', kluberController.packconveyorpt2);
router.get('/palletconveyorpt2', kluberController.palletconveyorpt2);
router.get('/palletiserpt2', kluberController.palletiserpt2);
router.get('/offpackmain', kluberController.offlinepackingmain);
router.get('/pet1', kluberController.pet1);
router.get('/pet2', kluberController.pet2);
router.get('/press1', kluberController.press1);
router.get('/press2', kluberController.press2);
router.get('/cip', kluberController.cip);
router.get('/oxonia', kluberController.oxonia);
router.get('/containeroff', kluberController.containeroff);
router.get('/robopackeroff', kluberController.robopackeroff);
router.get('/resealeroff', kluberController.resealeroff);
router.get('/packconveyoroff', kluberController.packconveyoroff);

/////////////////////////////////
// ROUTE FOR DOCUMENTATION SMS //
/////////////////////////////////
router.get('/section', documentationController.read);
router.get('/database/:id', documentationController.section);
router.get('/table/:id', documentationController.tables);

module.exports = router;
