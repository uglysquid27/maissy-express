const config = require('../config/connection.js');
const Sequelize = require('sequelize');

exports.oilproduct = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM oil_product p GROUP BY p.id_oil DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};
exports.greaseproduct = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM grease_product p GROUP BY p.id_grease DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};
exports.spraysproduct = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM sprays_product p GROUP BY p.id_sprays DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};
exports.maintenanceproduct = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM maintenance_product p GROUP BY p.id_maintenance_product DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};
exports.pasteproduct = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM paste_product p GROUP BY p.id_paste DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.injectionmolder = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM injection_model GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.bottleshower = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM bottle_shower GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.fillerpetline1 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM filler_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.krones = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM krones_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.sanyu = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM sanyu_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.labeller = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM labeller_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.divider = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM divider_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.sheetfeeder = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM sheet_feeder_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.shrinktray = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM shrink_tray_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.packconveyor = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM pack_conveyor_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.palletconveyor = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM pallet_conveyor_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.palletiser = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM palletiser_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.packroller = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM pack_roller_petline1 GROUP BY id desc;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.injectionmolderpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM injection_molder_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.bottleblowerpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM bottle_blower_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.fillerpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM filler_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.conveyorpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM conveyor_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.labellerpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM labeller_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.sanyupt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM sanyu_divider_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.caserpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM caser_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.sheetfeederpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM sheet_feeder_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.packconveyorpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM pack_conveyor_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.palletconveyorpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM pallet_conveyor_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.palletiserpt2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM palletiser_pt2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.offlinepackingmain = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM offline_packing_main GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.pet1 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM pet1_agitators GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.pet2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM pet2_agitators GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.press1 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM filler_press_1 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.press2 = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM filler_press_2 GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.cip = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM dpc13_pump GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.oxonia = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM oxonia GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.containeroff = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM container_conveyor_off GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.robopackeroff = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM robopacker_off GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.resealeroff = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM resealer_off GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.packconveyoroff = async (req, res) => {
    try {
        const get = await config.connect3.query("SELECT * FROM pack_conveyor_off GROUP BY id DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};