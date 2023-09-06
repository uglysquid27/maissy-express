const config = require('../config/connection.js');
const Sequelize = require('sequelize');

exports.readtotalasset = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device;", {
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

exports.readtotalassetoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI1';", {
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

exports.readassetoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI1';", {
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

exports.readtotalassetoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI2';", {
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

exports.readassetoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI2';", {
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

exports.readtotalassetfsb = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'FSB' OR a.name_area = 'SBK1';", {
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


exports.readassetfsb = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'SBK1';", {
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

exports.readtotalfinish = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable' OR t.`status` IS NULL) AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date;", {
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

exports.readtotalfinishoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable' OR t.`status` IS NULL) AND t.area_name = 'OCI1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date;", {
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

exports.readtotalfinishoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable' OR t.`status` IS NULL) AND t.area_name = 'OCI2' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date;", {
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

exports.readtotalfinishfsb = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable' OR t.`status` IS NULL) AND t.area_name = 'SBK1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name)  GROUP BY t.device_name,t.do_date;", {
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

exports.readgoodandsatis = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory') AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index desc;", {
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

exports.readgoodandsatisoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable') AND t.area_name = 'OCI1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.readgoodandsatisoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable') AND t.area_name = 'OCI2' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.readgoodandsatisfsb = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable') AND t.area_name = 'SBK1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name)  GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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
exports.readgoodandsatisoci1y = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable') AND t.area_name = 'OCI1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.readgoodandsatisoci2y = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable') AND t.area_name = 'OCI2' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.readgoodandsatisfsby = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Good' OR t.`status` = 'Satisfactory' OR t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable') AND t.area_name = 'SBK1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name)  GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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
exports.unsatisunac = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND ( t.`status` = 'Unsatisfactory' OR t.`status` = 'Unacceptable') AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index desc;", {
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

exports.unsatisunacoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.`status` FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Unatisfactory' OR t.`status` = 'Unacceptable') AND t.area_name = 'OCI1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date;", {
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

exports.unsatisunacoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.`status` FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Unatisfactory' OR t.`status` = 'Unacceptable') AND t.area_name = 'OCI2' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date;", {
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

exports.unsatisunacfsb = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.`status` FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Unatisfactory' OR t.`status` = 'Unacceptable') AND (t.area_name = 'FSB' OR t.area_name = 'SBK1') AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date;", {
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

exports.assetoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI1';", {
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

exports.assetoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'OCI2';", {
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

exports.assetfsb = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT COUNT(*) AS total FROM mst_device d JOIN view_area a ON a.id_area = d.id_area WHERE a.name_area = 'FSB' OR a.name_area = 'SBK1';", {
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

exports.oci1good = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Good' AND t.area_name = 'OCI1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.oci1satis = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Satisfactory' AND t.area_name = 'OCI1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.oci1unsatis = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Unsatisfactory' AND t.area_name = 'OCI1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.oci1unacc = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Unacceptable' AND t.area_name = 'OCI1' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.oci2good = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Good' AND t.area_name = 'OCI2' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.oci2satis = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Satisfactory' AND t.area_name = 'OCI2' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.oci2unsatis = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Unsatisfactory' AND t.area_name = 'OCI2' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.oci2unacc = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Unacceptable' AND t.area_name = 'OCI2' AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.FSBgood = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Good' AND (t.area_name = 'FSB' OR t.area_name = 'SBK1') AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.FSBsatis = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Satisfactory' AND (t.area_name = 'FSB' OR t.area_name = 'SBK1') AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.FSBunsatis = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Unsatisfactory' AND (t.area_name = 'FSB' OR t.area_name = 'SBK1') AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.FSBunacc = async (req, res) => {
    try {
        l.config.connect2.query("SELECT * FROM mst_history t WHERE t.do_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Unacceptable' AND (t.area_name = 'FSB' OR t.area_name = 'SBK1') AND t.status_index = (SELECT MAX(tr.status_index) from mst_history tr WHERE tr.device_name = t.device_name) GROUP BY t.device_name,t.do_date ORDER BY t.status_index DESC;", {
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

exports.finishtodaylistoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query(
            `WITH StatusInfo AS (
                SELECT
                    device_name,
                    do_date,
                    status_index,
                    MAX(PIC) AS PIC,
                    MAX(DATE_FORMAT(do_date, '%d %M %Y')) AS dodate
                FROM mst_history
                WHERE status_index IS NOT NULL
                GROUP BY device_name, do_date, status_index
            )
            
            SELECT
                mh.device_name,
                MAX(CASE WHEN mh.test_name = '2H' THEN mh.value ELSE '-' END) AS Two_H,
                MAX(CASE WHEN mh.test_name = 'CF+ (2H)' THEN mh.value ELSE '-' END) AS CF_Two_H,
                MAX(CASE WHEN mh.test_name = 'Thermal 2H' THEN mh.value ELSE '-' END) AS Thermal_Two_H,
                MAX(CASE WHEN mh.test_name = '3H' THEN mh.value ELSE '-' END) AS Three_H,
                MAX(CASE WHEN mh.test_name = 'CF+ (3H)' THEN mh.value ELSE '-' END) AS CF_Three_H,
                MAX(CASE WHEN mh.test_name = 'Thermal 3H' THEN mh.value ELSE '-' END) AS Thermal_Three_H,
                MAX(CASE WHEN mh.test_name = 'R' THEN mh.value ELSE '-' END) AS R,
                MAX(CASE WHEN mh.test_name = 'S' THEN mh.value ELSE '-' END) AS S,
                MAX(CASE WHEN mh.test_name = 'T' THEN mh.value ELSE '-' END) AS T,
                MAX(CASE WHEN mh.test_name = 'freq' THEN mh.value ELSE '-' END) AS Frequency,
                MAX(CASE WHEN mh.test_name = 'Thermal' THEN mh.value ELSE '-' END) AS Thermal,
                MAX(CASE WHEN mh.test_name = 'VC' THEN mh.value ELSE '-' END) AS VC,
                MAX(CASE WHEN mh.status_index THEN mh.PIC ELSE '-' END) AS PIC,
                MAX(CASE WHEN mh.status_index THEN DATE_FORMAT(mh.do_date, '%d %M %Y') ELSE '-' END) AS dodate,
                MAX(CASE WHEN mh.status_index THEN mh.do_date ELSE null END) AS do_date,
                (SELECT hh.test_name FROM mst_history hh WHERE hh.device_name = mh.device_name AND hh.do_date = mh.do_date AND hh.status_index = MAX(mh.status_index) LIMIT 1) AS test_name,
                CASE
                    WHEN MAX(mh.status_index) = 1 THEN 'Good'
                    WHEN MAX(mh.status_index) = 2 THEN 'Satisfactory'
                    WHEN MAX(mh.status_index) = 3 THEN 'Unsatisfactory'
                    WHEN MAX(mh.status_index) = 4 THEN 'Unacceptable'
                    ELSE null
                END AS Stat,
                MAX(CASE WHEN mh.status_index THEN mh.do_date ELSE '-' end) AS getdate 
            FROM mst_history mh
            LEFT JOIN StatusInfo status_info
                ON mh.device_name = status_info.device_name
                AND mh.do_date = status_info.do_date
                AND mh.status_index = status_info.status_index
            WHERE mh.area_name = 'OCI1'
            GROUP BY mh.plan_date, mh.device_name
            ORDER BY mh.do_date ASC;`, {
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

exports.finishtodaylistoci1testname = async (req, res) => {
    try {
        const get = await config.connect2.query(
            `SELECT distinct mh.test_name, mh.device_name, mh.do_date, mh.plan_date, mh.status FROM mst_history mh 
            WHERE mh.area_name = 'OCI1' GROUP BY mh.test_name, mh.plan_date,mh.device_name, mh.status ORDER BY mh.do_date ASC;`, {
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

exports.finishtodaylistoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query(`
        WITH StatusInfo AS (
            SELECT
                device_name,
                do_date,
                status_index,
                MAX(PIC) AS PIC,
                MAX(DATE_FORMAT(do_date, '%d %M %Y')) AS dodate
            FROM mst_history
            WHERE status_index IS NOT NULL
            GROUP BY device_name, do_date, status_index
        )
        
        SELECT
            mh.device_name,
            MAX(CASE WHEN mh.test_name = '2H' THEN mh.value ELSE '-' END) AS Two_H,
            MAX(CASE WHEN mh.test_name = 'CF+ (2H)' THEN mh.value ELSE '-' END) AS CF_Two_H,
            MAX(CASE WHEN mh.test_name = 'Thermal 2H' THEN mh.value ELSE '-' END) AS Thermal_Two_H,
            MAX(CASE WHEN mh.test_name = '3H' THEN mh.value ELSE '-' END) AS Three_H,
            MAX(CASE WHEN mh.test_name = 'CF+ (3H)' THEN mh.value ELSE '-' END) AS CF_Three_H,
            MAX(CASE WHEN mh.test_name = 'Thermal 3H' THEN mh.value ELSE '-' END) AS Thermal_Three_H,
            MAX(CASE WHEN mh.test_name = 'R' THEN mh.value ELSE '-' END) AS R,
            MAX(CASE WHEN mh.test_name = 'S' THEN mh.value ELSE '-' END) AS S,
            MAX(CASE WHEN mh.test_name = 'T' THEN mh.value ELSE '-' END) AS T,
            MAX(CASE WHEN mh.test_name = 'freq' THEN mh.value ELSE '-' END) AS Frequency,
            MAX(CASE WHEN mh.test_name = 'Thermal' THEN mh.value ELSE '-' END) AS Thermal,
            MAX(CASE WHEN mh.test_name = 'VC' THEN mh.value ELSE '-' END) AS VC,
            MAX(CASE WHEN mh.status_index THEN mh.PIC ELSE '-' END) AS PIC,
            MAX(CASE WHEN mh.status_index THEN DATE_FORMAT(mh.do_date, '%d %M %Y') ELSE '-' END) AS dodate,
            MAX(CASE WHEN mh.status_index THEN mh.do_date ELSE null END) AS do_date,
            (SELECT hh.test_name FROM mst_history hh WHERE hh.device_name = mh.device_name AND hh.do_date = mh.do_date AND hh.status_index = MAX(mh.status_index) LIMIT 1) AS test_name,
            CASE
                WHEN MAX(mh.status_index) = 1 THEN 'Good'
                WHEN MAX(mh.status_index) = 2 THEN 'Satisfactory'
                WHEN MAX(mh.status_index) = 3 THEN 'Unsatisfactory'
                WHEN MAX(mh.status_index) = 4 THEN 'Unacceptable'
                ELSE null
            END AS Stat,
            MAX(CASE WHEN mh.status_index THEN mh.do_date ELSE '-' end) AS getdate 
        FROM mst_history mh
        LEFT JOIN StatusInfo status_info
            ON mh.device_name = status_info.device_name
            AND mh.do_date = status_info.do_date
            AND mh.status_index = status_info.status_index
        WHERE mh.area_name = 'OCI2'
        GROUP BY mh.plan_date, mh.device_name
        ORDER BY mh.do_date ASC;`, {
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

exports.finishtodaylistfsb = async (req, res) => {
    try {
        const get = await config.connect2.query(`
        WITH StatusInfo AS (
            SELECT
                device_name,
                do_date,
                status_index,
                MAX(PIC) AS PIC,
                MAX(DATE_FORMAT(do_date, '%d %M %Y')) AS dodate
            FROM mst_history
            WHERE status_index IS NOT NULL
            GROUP BY device_name, do_date, status_index
        )
        
        SELECT
            mh.device_name,
            MAX(CASE WHEN mh.test_name = '2H' THEN mh.value ELSE '-' END) AS Two_H,
            MAX(CASE WHEN mh.test_name = 'CF+ (2H)' THEN mh.value ELSE '-' END) AS CF_Two_H,
            MAX(CASE WHEN mh.test_name = 'Thermal 2H' THEN mh.value ELSE '-' END) AS Thermal_Two_H,
            MAX(CASE WHEN mh.test_name = '3H' THEN mh.value ELSE '-' END) AS Three_H,
            MAX(CASE WHEN mh.test_name = 'CF+ (3H)' THEN mh.value ELSE '-' END) AS CF_Three_H,
            MAX(CASE WHEN mh.test_name = 'Thermal 3H' THEN mh.value ELSE '-' END) AS Thermal_Three_H,
            MAX(CASE WHEN mh.test_name = 'R' THEN mh.value ELSE '-' END) AS R,
            MAX(CASE WHEN mh.test_name = 'S' THEN mh.value ELSE '-' END) AS S,
            MAX(CASE WHEN mh.test_name = 'T' THEN mh.value ELSE '-' END) AS T,
            MAX(CASE WHEN mh.test_name = 'freq' THEN mh.value ELSE '-' END) AS Frequency,
            MAX(CASE WHEN mh.test_name = 'Thermal' THEN mh.value ELSE '-' END) AS Thermal,
            MAX(CASE WHEN mh.test_name = 'VC' THEN mh.value ELSE '-' END) AS VC,
            MAX(CASE WHEN mh.status_index THEN mh.PIC ELSE '-' END) AS PIC,
            MAX(CASE WHEN mh.status_index THEN DATE_FORMAT(mh.do_date, '%d %M %Y') ELSE '-' END) AS dodate,
            MAX(CASE WHEN mh.status_index THEN mh.do_date ELSE null END) AS do_date,
            (SELECT hh.test_name FROM mst_history hh WHERE hh.device_name = mh.device_name AND hh.do_date = mh.do_date AND hh.status_index = MAX(mh.status_index) LIMIT 1) AS test_name,
            CASE
                WHEN MAX(mh.status_index) = 1 THEN 'Good'
                WHEN MAX(mh.status_index) = 2 THEN 'Satisfactory'
                WHEN MAX(mh.status_index) = 3 THEN 'Unsatisfactory'
                WHEN MAX(mh.status_index) = 4 THEN 'Unacceptable'
                ELSE null
            END AS Stat,
            MAX(CASE WHEN mh.status_index THEN mh.do_date ELSE '-' end) AS getdate 
        FROM mst_history mh
        LEFT JOIN StatusInfo status_info
            ON mh.device_name = status_info.device_name
            AND mh.do_date = status_info.do_date
            AND mh.status_index = status_info.status_index
        WHERE mh.area_name = 'SBK1'
        GROUP BY mh.plan_date, mh.device_name
        ORDER BY mh.do_date ASC;`, {
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
exports.finishtodaylistoci1abnormal = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT mh.device_name,MAX(CASE WHEN mh.test_name = '2H' THEN mh.value ELSE '-' END) AS Two_H,MAX(CASE WHEN mh.test_name = 'R' THEN mh.value ELSE '-' END) AS R,MAX(CASE WHEN mh.test_name = 'S' THEN mh.value ELSE '-' END) AS S,MAX(CASE WHEN mh.test_name = 'T' THEN mh.value ELSE '-' END) AS T,MAX(CASE WHEN mh.test_name = 'freq' THEN mh.value ELSE '-' END) AS Frequency,MAX(CASE WHEN mh.test_name = 'Thermal' THEN mh.value ELSE '-' END) AS Thermal,MAX(CASE WHEN mh.test_name = 'CF+ (2H)' THEN mh.value ELSE '-' END) AS CF,MAX(CASE WHEN mh.test_name = 'VC' THEN mh.value ELSE '-' END) AS VC,MAX(CASE WHEN mh.status_index THEN mh.PIC ELSE '-' END) AS PIC,MAX(CASE WHEN mh.status_index THEN DATE_FORMAT(mh.do_date, '%d %M %Y') ELSE '-' END) AS dodate,CASE WHEN max(mh.status_index) = 1 THEN 'Good' WHEN max(mh.status_index) = 2 THEN 'Satisfactory' WHEN max(mh.status_index) = 3 THEN 'Unsatisfactory' WHEN max(mh.status_index) = 4 THEN 'Unacceptable' ELSE '-' END AS Stat,MAX(CASE WHEN mh.status_index THEN mh.do_date ELSE '-' end) AS getdate FROM mst_history mh WHERE mh.area_name = 'OCI1' GROUP BY mh.device_name,mh.do_date ORDER BY mh.do_date DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });

        let filteredArr = [];
        
        for (let x of get) {
            let filter = filteredArr.filter(y => x.device_name == y.device_name);
            if (filter.length > 0) {
                for (let z of filter) {
                    if (x.do_date < z.do_date) {
                        let idx = filteredArr.findIndex(item => item.device_name == z.device_name);

                        if (idx) {
                            filteredArr[idx] = z;
                        }
                    }
                }
            } else {
                filteredArr.push(x);
            }
        }

        // console.log(filteredArr);

        return res.status(200).json({
            filteredArr
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.finishtodaylistoci2abnormal = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT mh.device_name,MAX(CASE WHEN mh.test_name = '2H' THEN mh.value ELSE '-' END) AS Two_H,MAX(CASE WHEN mh.test_name = 'R' THEN mh.value ELSE '-' END) AS R,MAX(CASE WHEN mh.test_name = 'S' THEN mh.value ELSE '-' END) AS S,MAX(CASE WHEN mh.test_name = 'T' THEN mh.value ELSE '-' END) AS T,MAX(CASE WHEN mh.test_name = 'freq' THEN mh.value ELSE '-' END) AS Frequency,MAX(CASE WHEN mh.test_name = 'Thermal' THEN mh.value ELSE '-' END) AS Thermal,MAX(CASE WHEN mh.test_name = 'CF+ (2H)' THEN mh.value ELSE '-' END) AS CF,MAX(CASE WHEN mh.test_name = 'VC' THEN mh.value ELSE '-' END) AS VC,MAX(CASE WHEN mh.status_index THEN mh.PIC ELSE '-' END) AS PIC,MAX(CASE WHEN mh.status_index THEN DATE_FORMAT(mh.do_date, '%d %M %Y') ELSE '-' END) AS dodate,CASE WHEN max(mh.status_index) = 1 THEN 'Good' WHEN max(mh.status_index) = 2 THEN 'Satisfactory' WHEN max(mh.status_index) = 3 THEN 'Unsatisfactory' WHEN max(mh.status_index) = 4 THEN 'Unacceptable' ELSE '-' END AS Stat,MAX(CASE WHEN mh.status_index THEN mh.do_date ELSE '-' end) AS getdate FROM mst_history mh WHERE mh.area_name = 'OCI2' GROUP BY mh.device_name,mh.do_date ORDER BY mh.do_date DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });

        let filteredArr = [];

        for (let x of get) {
            let filter = filteredArr.filter(y => x.device_name == y.device_name);

            if (filter.length > 0) {
                for (let z of filter) {
                    if (x.do_date < z.do_date) {
                        let idx = filteredArr.findIndex(item => item.device_name == z.device_name);

                        if (idx) {
                            filteredArr[idx] = z;
                        }
                    }
                }
            } else {
                filteredArr.push(x);
            }
        }

        // console.log(filteredArr);

        return res.status(200).json({
            filteredArr
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.finishtodaylistfsbabnormal = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT mh.device_name,MAX(CASE WHEN mh.test_name = '2H' THEN mh.value ELSE '-' END) AS Two_H,MAX(CASE WHEN mh.test_name = 'R' THEN mh.value ELSE '-' END) AS R,MAX(CASE WHEN mh.test_name = 'S' THEN mh.value ELSE '-' END) AS S,MAX(CASE WHEN mh.test_name = 'T' THEN mh.value ELSE '-' END) AS T,MAX(CASE WHEN mh.test_name = 'freq' THEN mh.value ELSE '-' END) AS Frequency,MAX(CASE WHEN mh.test_name = 'Thermal' THEN mh.value ELSE '-' END) AS Thermal,MAX(CASE WHEN mh.test_name = 'CF+ (2H)' THEN mh.value ELSE '-' END) AS CF,MAX(CASE WHEN mh.test_name = 'VC' THEN mh.value ELSE '-' END) AS VC,MAX(CASE WHEN mh.status_index THEN mh.PIC ELSE '-' END) AS PIC,MAX(CASE WHEN mh.status_index THEN DATE_FORMAT(mh.do_date, '%d %M %Y') ELSE '-' END) AS dodate,CASE WHEN max(mh.status_index) = 1 THEN 'Good' WHEN max(mh.status_index) = 2 THEN 'Satisfactory' WHEN max(mh.status_index) = 3 THEN 'Unsatisfactory' WHEN max(mh.status_index) = 4 THEN 'Unacceptable' ELSE '-' END AS Stat,MAX(CASE WHEN mh.status_index THEN mh.do_date ELSE '-' end) AS getdate FROM mst_history mh WHERE mh.area_name = 'SBK1' GROUP BY mh.device_name,mh.do_date ORDER BY mh.do_date DESC;", {
            type: Sequelize.QueryTypes.SELECT
        });

        let filteredArr = [];

        for (let x of get) {
            let filter = filteredArr.filter(y => x.device_name == y.device_name);

            if (filter.length > 0) {
                for (let z of filter) {
                    if (x.do_date < z.do_date) {
                        let idx = filteredArr.findIndex(item => item.device_name == z.device_name);

                        if (idx) {
                            filteredArr[idx] = z;
                        }
                    }
                }
            } else {
                filteredArr.push(x);
            }
        }

        // console.log(filteredArr);

        return res.status(200).json({
            filteredArr
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};
exports.vibrationlineoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.do_date,t.value,t.device_name,t.test_name FROM mst_history t WHERE t.area_name = 'OCI1' AND t.kategori = 'vibration' GROUP BY t.device_name,t.do_date,t.test_name,t.PIC ORDER BY t.do_date ASC;", {
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

exports.vibrationlineoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.do_date,t.value,t.device_name,t.test_name FROM mst_history t WHERE t.area_name = 'OCI2' AND t.kategori = 'vibration' GROUP BY t.device_name,t.do_date,t.test_name,t.PIC ORDER BY t.do_date ASC;", {
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

exports.vibrationlinefsb = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.do_date,t.value,t.device_name,t.test_name FROM mst_history t WHERE (t.area_name = 'FSB' OR t.area_name = 'SBK1') AND t.kategori = 'vibration' GROUP BY t.device_name,t.do_date,t.test_name,t.PIC ORDER BY t.do_date ASC;", {
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

exports.amperelineoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.do_date,t.value,t.device_name,t.test_name FROM mst_history t WHERE t.area_name = 'OCI1' AND t.kategori = 'ampere' GROUP BY t.device_name,t.do_date,t.test_name,t.PIC ORDER BY t.do_date ASC;", {
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

exports.amperelineoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.do_date,t.value,t.device_name,t.test_name FROM mst_history t WHERE t.area_name = 'OCI2' AND t.kategori = 'ampere' GROUP BY t.device_name,t.do_date,t.test_name,t.PIC ORDER BY t.do_date ASC;", {
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

exports.amperelinefsb = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.do_date,t.value,t.device_name,t.test_name FROM mst_history t WHERE (t.area_name = 'FSB' OR t.area_name = 'SBK1') AND t.kategori = 'ampere' GROUP BY t.device_name,t.do_date,t.test_name,t.PIC ORDER BY t.do_date ASC;", {
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

exports.temperaturelineoci1 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.do_date,t.value,t.device_name,t.test_name FROM mst_history t WHERE t.area_name = 'OCI1' AND t.kategori = 'temperature' GROUP BY t.device_name,t.do_date,t.test_name,t.PIC ORDER BY t.do_date ASC;", {
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

exports.temperaturelineoci2 = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.do_date,t.value,t.device_name,t.test_name FROM mst_history t WHERE t.area_name = 'OCI2' AND t.kategori = 'temperature' GROUP BY t.device_name,t.do_date,t.test_name,t.PIC ORDER BY t.do_date ASC;", {
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

exports.temperaturelinefsb = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT t.do_date,t.value,t.device_name,t.test_name FROM mst_history t WHERE (t.area_name = 'FSB' OR t.area_name = 'SBK1') AND t.kategori = 'temperature' GROUP BY t.device_name,t.do_date,t.test_name,t.PIC ORDER BY t.do_date ASC;", {
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
exports.notepdm = async (req, res) => {
    try {
        const get = await config.connect2.query("select `mh`.`id` AS `id`,`mh`.`device_name` AS `device_name`,max(case when `mh`.`test_name` = '2H' then `mh`.`value` else '-' end) AS `Two_H`,max(case when `mh`.`test_name` = 'R' then `mh`.`value` else '-' end) AS `R`,max(case when `mh`.`test_name` = 'S' then `mh`.`value` else '-' end) AS `S`,max(case when `mh`.`test_name` = 'T' then `mh`.`value` else '-' end) AS `T`,max(case when `mh`.`test_name` = 'freq' then `mh`.`value` else '-' end) AS `Frequency`,max(case when `mh`.`test_name` = 'Thermal' then `mh`.`value` else '-' end) AS `Thermal`,max(case when `mh`.`test_name` = 'CF+ (2H)' then `mh`.`value` else '-' end) AS `CF`,max(case when `mh`.`test_name` = 'VC' then `mh`.`value` else '-' end) AS `VC`,max(case when `mh`.`status_index` then `mh`.`PIC` else '-' end) AS `PIC`,MAX(CASE WHEN mh.status_index THEN DATE_FORMAT(mh.do_date, '%d %M %Y') ELSE '-' END) AS do_date,case when max(`mh`.`status_index`) = 1 then 'Good' when max(`mh`.`status_index`) = 2 then 'Satisfactory' when max(`mh`.`status_index`) = 3 then 'Unsatisfactory' when max(`mh`.`status_index`) = 4 then 'Unacceptable' else NULL end AS `status`,`mn`.`note` AS `note`,`mn`.`picture` AS `picture` from (`mst_history` `mh` left join `mst_history_note` `mn` on(`mn`.`id_history` = `mh`.`id`)) where `mn`.`id` in (select max(`mn`.`id`) from `mst_history_note` `mn` group by `mn`.`device_name`,`mn`.`do_date`,`mn`.`id_history`) or `mn`.`id` is null group by `mh`.`plan_date`,`mh`.`device_name` order by `mh`.`id`;", {
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
exports.oci1fnotfinish = async (req, res) => {
    try {
        const get = await config.connect2.query(`SELECT a.name_area,a.id_child,t.value, st.id_set_test, d.device_name, t.plan_date, MONTH(t.plan_date) AS month, YEAR(t.plan_date) AS year
        FROM tr_test t 
        JOIN mst_set_test st ON st.id_set_test = t.id_set_test 
        JOIN mst_device d ON d.id_device = st.id_device 
        JOIN mst_area a ON a.id_area = d.id_area 
        WHERE a.id_child = 1 GROUP BY st.id_set_test;`, {
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
exports.oci2fnotfinish = async (req, res) => {
    try {
        const get = await config.connect2.query(`SELECT a.name_area,a.id_child,t.value, st.id_set_test, d.device_name, t.plan_date, MONTH(t.plan_date) AS month, YEAR(t.plan_date) AS year
        FROM tr_test t 
        JOIN mst_set_test st ON st.id_set_test = t.id_set_test 
        JOIN mst_device d ON d.id_device = st.id_device 
        JOIN mst_area a ON a.id_area = d.id_area 
        WHERE a.id_child = 2 GROUP BY st.id_set_test;`, {
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
exports.fsbffinish = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT a.name_area,a.id_child,t.value, d.device_name FROM tr_test t JOIN mst_set_test st ON st.id_set_test = t.id_set_test JOIN mst_device d ON d.id_device = st.id_device JOIN mst_area a ON a.id_area = d.id_area WHERE a.id_child = 3 AND t.plan_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP GROUP BY d.device_name,t.plan_date;", {
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

exports.fsbfnotfinish = async (req, res) => {
    try {
        const get = await config.connect2.query(`
        SELECT a.name_area,a.id_child,t.value, d.device_name, t.plan_date 
        FROM tr_test t 
        JOIN mst_set_test st ON st.id_set_test = t.id_set_test 
        JOIN mst_device d ON d.id_device = st.id_device 
        JOIN mst_area a ON a.id_area = d.id_area 
        WHERE a.id_child = 3 GROUP BY d.device_name
        ;`, {
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

exports.oci1valuepermonth = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT DATE_FORMAT(h.do_date,'%M') AS bulan,h.device_name FROM mst_history h WHERE h.area_name = 'OCI1' AND h.do_date BETWEEN date(date_format(CURDATE(),'%Y-01-01')) AND CURRENT_TIMESTAMP GROUP BY h.device_name,h.do_date;", {
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

exports.oci2valuepermonth = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT DATE_FORMAT(h.do_date,'%M') AS bulan,h.device_name FROM mst_history h WHERE h.area_name = 'OCI2' AND h.do_date BETWEEN date(date_format(CURDATE(),'%Y-01-01')) AND CURRENT_TIMESTAMP GROUP BY h.device_name,h.do_date;", {
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

exports.fsbvaluepermonth = async (req, res) => {
    try {
        const get = await config.connect2.query("SELECT DATE_FORMAT(h.do_date,'%M') AS bulan,h.device_name FROM mst_history h WHERE h.area_name = 'SBK1' AND h.do_date BETWEEN date(date_format(CURDATE(),'%Y-01-01')) AND CURRENT_TIMESTAMP GROUP BY h.device_name,h.do_date;", {
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