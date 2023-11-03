const config = require('../config/connection.js');
const Sequelize = require('sequelize');

exports.read = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT DATE_FORMAT(a.tanggal_temuan,'%Y-%m') AS bulanTahun, month(a.tanggal_temuan) as bulan, k.kategori,l.level,a.id, a.finding, a.status AS status1, b.no_wo, c.status AS status2, a.id_area FROM tr_temuan_h a JOIN mst_kategori k ON k.id = a.kategori JOIN mst_level l ON l.id = a.level JOIN mst_order b ON a.id = b.id_temuan JOIN tr_wo_sap c ON b.no_wo=c.order WHERE a.tanggal_temuan BETWEEN date(date_format(CURDATE(),'%Y-01-01')) AND CURRENT_TIMESTAMP
        UNION ALL
        SELECT  DATE_FORMAT(a.tanggal_temuan,'%Y-%m') AS bulanTahun, month(a.tanggal_temuan), k.kategori,l.level,a.id, a.finding, a.status AS status1, null, null, a.id_area FROM tr_temuan_h a JOIN mst_kategori k ON k.id = a.kategori JOIN mst_level l ON l.id = a.level WHERE a.id not IN (select id_temuan FROM mst_order) and a.tanggal_temuan BETWEEN date(date_format(CURDATE(),'%Y-01-01')) AND CURRENT_TIMESTAMP`, {
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

exports.readTotalFindingM = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT * FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.id_area = 1;", {
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

exports.readTotalFindingMoci2 = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT * FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.id_area = 2;", {
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

exports.readTotalFindingMfsb = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT * FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.id_area = 3;", {
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

exports.readTotalFindingMutileng = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT * FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.id_area = 4;", {
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

exports.readpendingexecute = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Draft' OR t.`status` = 'Submit' OR t.`status` = 'Revise');", {
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

exports.readpendingexecutem = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Draft' OR t.`status` = 'Submit' OR t.`status` = 'Revise') AND t.id_area = 1;", {
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

exports.readpendingexecutemoci2 = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Draft' OR t.`status` = 'Submit' OR t.`status` = 'Revise') AND t.id_area = 2;", {
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

exports.readpendingexecutemfsb = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Draft' OR t.`status` = 'Submit' OR t.`status` = 'Revise') AND t.id_area = 3;", {
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

exports.readpendingexecutemutileng = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND (t.`status` = 'Draft' OR t.`status` = 'Submit' OR t.`status` = 'Revise') AND t.id_area = 4;", {
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

exports.readreadyexecute = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Approved';", {
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

exports.readreadyexecutem = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Approved' AND t.id_area = 1;", {
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

exports.readreadyexecutemoci2 = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Approved' AND t.id_area = 2;", {
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

exports.readreadyexecutemfsb = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Approved' AND t.id_area = 3;", {
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

exports.readreadyexecutemutileng = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Approved' AND t.id_area = 4;", {
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

exports.readfinishexecute = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 12 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Done';", {
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

exports.readfinishexecutem = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Done' AND t.id_area = 1;", {
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

exports.readfinishexecutemoci2 = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Done' AND t.id_area = 2;", {
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

exports.readfinishexecutemfsb = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Done' AND t.id_area = 3;", {
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

exports.readfinishexecutemutileng = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT COUNT(*) AS total FROM tr_temuan_h t WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.`status` = 'Done' AND t.id_area = 4;", {
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

exports.findingpending = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT o.id_temuan, o.no_wo, t.finding,l.level, t.photo, t.func_loc, k.kategori, w.status, t.id_area,s.section, w.total_actual
        FROM tr_temuan_h t 
        LEFT JOIN mst_order o ON o.id_temuan = t.id 
        LEFT JOIN tr_wo_sap w ON w.order = o.no_wo  
        JOIN mst_level l ON l.id = t.level 
        JOIN mst_kategori k ON k.id = t.kategori 
        JOIN mst_section s ON t.id_section = s.id 
        WHERE t.id_area = 1 AND s.section = 'Preparation' GROUP BY t.func_loc`, {
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

exports.funcloc = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT t.func_loc, i.PLTXT AS funclocdesc, s.section
        FROM tr_temuan_h t 
        JOIN v_iflotx_sms i ON i.TPLNR = t.func_loc 
        JOIN mst_area a ON a.id = t.id_area
        JOIN mst_section s ON s.id = t.id_section
        WHERE a.area = 'OCI-1' GROUP BY t.func_loc`, {
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

exports.findingpendingsection = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT s.section, a.area FROM mst_section s JOIN mst_area a ON a.id = s.id_area WHERE a.area = 'OCI-1';", {
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


exports.levelam = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT l.`level` FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.id_area = 1;", {
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

exports.findingpendingoci2 = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT o.no_wo, t.finding,l.level, t.photo, t.func_loc, k.kategori, w.status, a.area,s.section 
        FROM tr_temuan_h t 
        LEFT JOIN mst_order o ON o.funlock = t.func_loc 
        LEFT JOIN tr_wo_sap w ON w.order = o.no_wo  
        JOIN mst_level l ON l.id = t.level
        JOIN mst_area a ON a.id = t.id_area 
        JOIN mst_kategori k ON k.id = t.kategori 
        JOIN mst_section s ON t.id_section = s.id 
        WHERE a.area = 'OCI-2' GROUP BY t.func_loc;`, {
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

exports.funclococi2 = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT t.func_loc, i.PLTXT AS funclocdesc, s.section
        FROM tr_temuan_h t 
        JOIN v_iflotx_sms i ON i.TPLNR = t.func_loc 
        JOIN mst_area a ON a.id = t.id_area
        JOIN mst_section s ON s.id = t.id_section
        WHERE a.area = 'OCI-2' GROUP BY t.func_loc`, {
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

exports.findingpendingsectionoci2 = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT s.section, a.area FROM mst_section s JOIN mst_area a ON a.id = s.id_area WHERE a.area = 'OCI-2';", {
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

exports.levelamoci2 = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT l.`level` FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.id_area = 2;", {
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

exports.findingpendingfsb = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT o.no_wo, t.finding,l.level, t.photo, t.func_loc, k.kategori, w.status, a.area,s.section 
        FROM tr_temuan_h t 
        LEFT JOIN mst_order o ON o.funlock = t.func_loc 
        LEFT JOIN tr_wo_sap w ON w.order = o.no_wo  
        JOIN mst_level l ON l.id = t.level
        JOIN mst_area a ON a.id = t.id_area 
        JOIN mst_kategori k ON k.id = t.kategori 
        JOIN mst_section s ON t.id_section = s.id 
        WHERE a.area = 'FSB' GROUP BY t.func_loc;`, {
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

exports.funclocfsb = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT t.func_loc, i.PLTXT AS funclocdesc, s.section
        FROM tr_temuan_h t 
        JOIN v_iflotx_sms i ON i.TPLNR = t.func_loc 
        JOIN mst_area a ON a.id = t.id_area
        JOIN mst_section s ON s.id = t.id_section
        WHERE a.area = 'FSB' GROUP BY t.func_loc`, {
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

exports.findingpendingsectionfsb = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT s.section, a.area FROM mst_section s JOIN mst_area a ON a.id = s.id_area WHERE a.area = 'FSB';", {
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

exports.levelamfsb = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT l.`level` FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.id_area = 3;", {
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

exports.findingpendingutileng = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT DISTINCT o.no_wo, t.finding,l.`level`, t.photo, t.func_loc, w.status, a.area,s.section FROM tr_temuan_h t JOIN tr_wo_sap w ON w.order_type = t.order_type LEFT JOIN mst_order o ON o.funlock = t.func_loc JOIN mst_level l ON l.id = t.`level`JOIN mst_area a ON a.id = t.id_area JOIN mst_section s ON t.id_section = s.id WHERE a.area = 'Utility' GROUP BY t.func_loc;", {
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

exports.levelamutileng = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT l.`level` FROM tr_temuan_h t JOIN mst_level l ON l.id = t.`level` WHERE t.last_update BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL 0 MONTH )AND CURRENT_TIMESTAMP AND t.id_area = 4;", {
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

exports.kategori = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT k.kategori FROM tr_temuan_h t JOIN mst_kategori k ON k.id = t.kategori WHERE t.tanggal_temuan BETWEEN date(date_format(CURDATE(),'%Y-01-01')) AND CURRENT_TIMESTAMP;", {
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

exports.getOrder = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT h.finding,o.actual_end, o.foto, o.note_executor, l.lg_name ,h.func_loc, t.total_actual
        FROM mst_order o 
        JOIN tr_temuan_h h ON o.id_temuan = h.id 
        JOIN vphpmslogin l ON l.lg_nik = o.executor OR l.lg_name = o.executor
        LEFT JOIN tr_wo_sap t ON t.order = o.no_wo
        WHERE o.actual_end IS NOT NULL;`, {
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
exports.totaldata1year = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT DATE_FORMAT(tr.basic_start_date,'%M') AS bulan,tr.teco_date,o.id_area FROM mst_order o JOIN tr_wo_sap tr ON tr.`order` = o.no_wo WHERE tr.basic_start_date BETWEEN DATE_SUB(CONVERT(CURDATE() - DAY(CURDATE()) + 1,DATE),INTERVAL (MONTH(CURDATE())-1) MONTH ) AND CURDATE()", {
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
exports.totaldatapost = async (req, res) => {
    const { tgl1, tgl2 } = req.body;
    let get = []
    try {
        get = await config.connect1.query("SELECT DATE_FORMAT(tr.basic_finish_date,'%Y-%m') AS bulanTahun, DATE_FORMAT(tr.basic_finish_date,'%M') AS bulan, tr.`order` AS no_wo, tr.`status`, tr.description,tr.basic_finish_date,tr.teco_date, tr.created_at, tr.release_date ,tr.order_type, tr.plant_section FROM tr_wo_sap tr WHERE tr.basic_finish_date BETWEEN '" + tgl1 + "' AND '" + tgl2 + "'", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json(
            get
        );
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
  
}; 
  
exports.totalfeeding = async (req, res) => {
    try {
        const get = await config.connect1.query(
            `SELECT l.level, k.kategori, a.id,  MONTH(a.tanggal_temuan) AS bulan, DATE_FORMAT(a.tanggal_temuan,'%Y-%m') AS bulanTahun, a.tanggal_temuan AS tanggal_temuan, YEAR(a.tanggal_temuan) AS tahun, MONTH(a.tanggal_temuan) AS bulan, a.finding, a.status AS status1, b.status_pengerjaan AS status_pengerjaan, b.no_wo, c.status AS status2, a.id_area AS id_area 
            FROM tr_temuan_h a 
            JOIN mst_level l ON l.id = a.level 
            JOIN mst_order b ON a.id = b.id_temuan 
            JOIN tr_wo_sap c ON b.no_wo=c.order
            JOIN mst_kategori k ON k.id = a.kategori
            WHERE YEAR(tanggal_temuan) = YEAR(NOW()) 
                    UNION ALL
                    SELECT l.level, k.kategori, a.id,  MONTH(a.tanggal_temuan) AS bulan,  DATE_FORMAT(a.tanggal_temuan,'%Y-%m') as bulanTahun, a.tanggal_temuan AS tanggal_temuan, YEAR(a.tanggal_temuan) AS tahun,MONTH(a.tanggal_temuan) AS bulan, a.finding, a.status AS status1, NULL AS status_pengerjaan, null, null, a.id_area AS id_area 
                            FROM tr_temuan_h a
                            JOIN mst_level l ON l.id = a.level 
                            JOIN mst_kategori k ON k.id = a.kategori
                            WHERE YEAR(tanggal_temuan) = YEAR(NOW()) ORDER BY id_area, tanggal_temuan DESC`, {
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

exports.temuanharian = async (req, res) => {
    try {
        const get = await config.connect1.query(
            `SELECT l.level,a.id,  MONTH(a.tanggal_temuan) AS bulan, DATE_FORMAT(a.tanggal_temuan,'%Y-%m') AS bulanTahun, a.tanggal_temuan AS tanggal_temuan, YEAR(a.tanggal_temuan) AS tahun, MONTH(a.tanggal_temuan) AS bulan, a.finding, a.status AS status1, b.status_pengerjaan AS status_pengerjaan, b.no_wo, c.status AS status2, a.id_area AS id_area 
            FROM tr_temuan_h a 
            JOIN mst_level l ON l.id = a.level 
            JOIN mst_order b ON a.id = b.id_temuan 
            JOIN tr_wo_sap c ON b.no_wo=c.order
            WHERE YEAR(tanggal_temuan) = YEAR(NOW())
                    UNION ALL
                    SELECT l.level,a.id,  MONTH(a.tanggal_temuan) AS bulan,  DATE_FORMAT(a.tanggal_temuan,'%Y-%m') as bulanTahun, a.tanggal_temuan AS tanggal_temuan, YEAR(a.tanggal_temuan) AS tahun,MONTH(a.tanggal_temuan) AS bulan, a.finding, a.status AS status1, NULL AS status_pengerjaan, null, null, a.id_area AS id_area 
                            FROM tr_temuan_h a
                            JOIN mst_level l ON l.id = a.level 
                            WHERE YEAR(tanggal_temuan) = YEAR(NOW()) ORDER BY id_area, tanggal_temuan DESC`, {
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

exports.totalapproval = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT distinct h.id_area,h.`status`,h.id_area FROM tr_temuan_h h;", {
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
exports.totalapprovalorderfinish = async (req, res) => {
    const { id_area } = req.body;
    let get = []
    try {
        get = await config.connect1.query(`SELECT o.id AS id, o.no_wo AS no_wo, h.finding AS finding, h.id_area AS id_area,
        h.id_section AS id_section, o.actual_start AS actual_start, o.actual_end AS
        actual_end, o.executor AS executor, o.foto AS foto, o.note_executor AS
        note_executor, o.note_cek_spv AS note_cek_spv, o.status_spv AS status_spv
      FROM mst_order o JOIN
        tr_temuan_h h ON h.id = o.id_temuan
      WHERE o.actual_start IS NOT NULL AND o.status_spv IS NULL AND h.id_area = '` + id_area + `'`, {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json(
            get
        );
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }

};

exports.totalapprovalshcedule = async (req, res) => {
    const { id_area } = req.body;
    let get = []
    try {
        get = await config.connect1.query("SELECT o.id AS id, o.id_temuan AS id_temuan, o.funlock AS funlock, o.no_wo AS no_wo, trwo.order_type AS order_type, o.id_area AS id_area, o.id_section AS id_section, o.`desc` AS `desc`, o.plan_start AS plan_start, trwo.created_at, DATE_FORMAT(trwo.created_at,'%Y-%m') AS bulanTahun, o.plan_end AS plan_end, o.executor AS executor, o.note_spv AS note_spv, o.waktu_pengerjaandone AS waktu_pengerjaandone FROM mst_order o JOIN tr_wo_sap trwo ON trwo.order = o.no_wo WHERE o.plan_start IS NULL AND o.plan_end IS NULL AND trwo.status = 'READY' AND o.actual_start IS NULL AND o.actual_end IS NULL AND o.id_area = '" + id_area + "'", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json(
            get
        );
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }

};

exports.totalapprovalcreateorder = async (req, res) => {
    const { id_area } = req.body;
    let get = []
    try {
        get = await config.connect1.query(`SELECT t.id AS id, t.tanggal_temuan AS tanggal_temuan, t.order_type AS
        order_type, t.main_work_center AS main_work_center, t.pm_act_type AS
        pm_act_type, t.planner_group AS planner_group, t.func_loc AS func_loc,
        t.maintance_plan AS maintance_plan, t.plant_section AS plant_section,
        t.note AS spv_note, t.work_center AS work_center, t.profit_center AS
        profit_center, t.responsible_cost_center AS responsible_cost_center,
        t.wbs_element AS wbs_element, t.cost_center AS cost_center, t.basic_start AS
        basic_start, t.basic_finish AS basic_finish, t.level AS level, t.finding AS
        finding, t.sys_cond AS sys_cond, t.finding_description AS finding_description,
        t.report_by AS report_by, t.object_part AS object_part, t.ob_detail AS
        ob_detail, t.damage AS damage, t.d_detail AS d_detail, t.cause_code AS
        cause_code, t.cc_detail AS cc_detail, t.status AS status, t.id_area AS
        id_area, t.id_section AS id_section, t.photo AS photo, t.foto_validasi AS
        foto_validasi, t.photo_type AS photo_type, t.photo_size AS photo_size,
        t.photo_width AS photo_width, t.user AS user
      FROM tr_temuan_h t WHERE t.status = 'submit' AND t.id_area = '` + id_area + `'`, {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json(
            get
        );
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }

};
exports.totalapprovalspv = async (req, res) => {
    const { id_area } = req.body;
    let get = []
    try {
        get = await config.connect1.query(`SELECT tr_temuan_h.id AS id, tr_temuan_h.finding AS finding,
        tr_temuan_h.finding_description AS finding_description, tr_temuan_h.photo AS
        photo, tr_temuan_h.user AS user, tr_temuan_h.tanggal_temuan AS tanggal_temuan,
        tr_temuan_h.id_area AS id_area, tr_temuan_h.id_section AS id_section,
        tr_temuan_h.func_loc AS func_loc, tr_temuan_h.object_part AS object_part,
        tr_temuan_h.ob_detail AS ob_detail, tr_temuan_h.damage AS damage,
        tr_temuan_h.d_detail AS d_detail, tr_temuan_h.cause_code AS cause_code,
        tr_temuan_h.cc_detail AS cc_detail, tr_temuan_h.level AS level,
        tr_temuan_h.kategori AS kategori, tr_temuan_h.scope AS scope,
        tr_temuan_h.status AS status, tr_temuan_h.approve_spv AS approve_spv,
        tr_temuan_h.last_update AS last_update, tr_temuan_h.note AS note,
        tr_temuan_h.approve_by AS approve_by, tr_temuan_h.approve_date AS
        approve_date, tr_temuan_h.schedule AS schedule, tr_temuan_h.pic AS pic,
        tr_temuan_h.photo_type AS photo_type, tr_temuan_h.photo_size AS photo_size,
        tr_temuan_h.photo_width AS photo_width, tr_temuan_h.photo_height AS
        photo_height, tr_temuan_h.order_type AS order_type, tr_temuan_h.pm_act_type AS
        pm_act_type, tr_temuan_h.sys_cond AS sys_cond, tr_temuan_h.basic_start AS
        basic_start, tr_temuan_h.basic_finish AS basic_finish, tr_temuan_h.report_by
        AS report_by, tr_temuan_h.main_work_center AS main_work_center,
        tr_temuan_h.planner_group AS planner_group, tr_temuan_h.plant_section AS
        plant_section, tr_temuan_h.work_center AS work_center,
        tr_temuan_h.profit_center AS profit_center,
        tr_temuan_h.responsible_cost_center AS responsible_cost_center,
        tr_temuan_h.wbs_element AS wbs_element, tr_temuan_h.cost_center AS
        cost_center, tr_temuan_h.maintance_plan AS maintance_plan
      FROM tr_temuan_h
      WHERE tr_temuan_h.scope = 0 AND tr_temuan_h.approve_spv IS NULL AND tr_temuan_h.status = 'Submit' AND tr_temuan_h.id_area = '` + id_area + `'`, {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json(
            get
        );
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }

};
exports.totalapprovalreadyexecution = async (req, res) => {
    const { id_area } = req.body;
    let get = []
    try {
        get = await config.connect1.query("SELECT o.id AS id, o.no_wo AS no_wo, trwo.order_type AS order_type, o.`desc` AS `desc`, o.id_area AS id_area, o.id_section AS id_section, o.plan_start AS plan_start, o.plan_end AS plan_end, o.executor AS executor, o.actual_start AS actual_start, o.actual_end AS actual_end, o.foto AS foto, o.note_executor AS note_executor, o.status_pengerjaan AS status_pengerjaan, o.photo AS photo, o.photo_type AS photo_type, o.photo_size AS photo_size, o.photo_width AS photo_width FROM mst_order o JOIN tr_wo_sap trwo ON trwo.order = o.no_wo WHERE o.plan_start IS NOT NULL AND o.plan_end IS NOT NULL AND o.status_pengerjaan IS NULL AND o.id_area = '" + id_area + "'", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json(
            get
        );
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }

};

exports.reportingharianam = async (req, res) => {
    const { tgl, id_area } = req.body;
    try {
        let get = await config.connect1.query("SELECT s.section,a.no_wo,a.foto, a.`desc`, a.note_executor, a.executor,(SELECT AVG(ce.prosentase) FROM componen_order ce WHERE ce.no_wo = a.no_wo) AS total  FROM mst_order a join mst_section s ON s.id = a.id_section WHERE a.actual_end = '" + tgl + "' AND a.id_area = '" + id_area + "' AND a.actual_end IS NOT NULL", {
            type: Sequelize.QueryTypes.SELECT
        });

        get = get.map(x => {
            let obj = {
                ...x,
                foto: x.foto ? x.foto.split(",") : null
            }

            return obj;
        });

        return res.status(200).json(
            get
        );
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.totalpartreporting = async (req, res) => {
    const { no_wo } = req.body;
    let get = []
    try {
        get = await config.connect1.query("SELECT a.no_wo,a.desc_part,a.qty,a.qty_install,a.prosentase FROM componen_order a WHERE a.no_wo = '" + no_wo + "'", {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json(
            get
        );
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }

};

