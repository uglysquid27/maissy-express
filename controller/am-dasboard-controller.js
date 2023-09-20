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
        const get = await config.connect1.query(`SELECT o.no_wo, t.finding,l.level, t.photo, t.func_loc, k.kategori, w.status, a.area,s.section, w.total_actual
        FROM tr_temuan_h t 
        LEFT JOIN mst_order o ON o.funlock = t.func_loc 
        LEFT JOIN tr_wo_sap w ON w.order = o.no_wo  
        JOIN mst_level l ON l.id = t.level 
        JOIN mst_area a ON a.id = t.id_area 
        JOIN mst_kategori k ON k.id = t.kategori 
        JOIN mst_section s ON t.id_section = s.id 
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
        get = await config.connect1.query("SELECT DATE_FORMAT(tr.basic_finish_date,'%M') AS bulan, tr.description,tr.basic_finish_date,tr.teco_date,tr.order_type, tr.plant_section FROM tr_wo_sap tr WHERE tr.basic_finish_date BETWEEN '" + tgl1 + "' AND '" + tgl2 + "'", {
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
            `SELECT l.level,a.id, DATE_FORMAT(a.tanggal_temuan,'%Y-%m') AS bulanTahun, a.tanggal_temuan AS tanggal_temuan, YEAR(a.tanggal_temuan) AS tahun, MONTH(a.tanggal_temuan) AS bulan, a.finding, a.status AS status1, b.status_pengerjaan AS status_pengerjaan, b.no_wo, c.status AS status2, a.id_area AS id_area 
            FROM tr_temuan_h a 
            JOIN mst_level l ON l.id = a.level 
            JOIN mst_order b ON a.id = b.id_temuan 
            JOIN tr_wo_sap c ON b.no_wo=c.order
            WHERE YEAR(tanggal_temuan) = YEAR(NOW()) 
                    UNION ALL
                    SELECT l.level,a.id,  DATE_FORMAT(a.tanggal_temuan,'%Y-%m') AS bulanTahun, a.tanggal_temuan AS tanggal_temuan, YEAR(a.tanggal_temuan) AS tahun,MONTH(a.tanggal_temuan) AS bulan, a.finding, a.status AS status1, NULL AS status_pengerjaan, null, null, a.id_area AS id_area 
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
        get = await config.connect1.query("SELECT COUNT(*) AS total FROM v_order_finish s WHERE s.id_area = '" + id_area + "'", {
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
        get = await config.connect1.query("SELECT COUNT(*) AS total FROM view_schedule s WHERE s.id_area = '" + id_area + "' AND s.plan_start IS NULL AND s.plan_end IS NULL ", {
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

exports.costmonitoringoci1 = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT DATE_FORMAT(date, '%Y') AS year, DATE_FORMAT(date, '%m') AS month, c.category, c.budget, c.actual, a.area 
        FROM cost_order c
        JOIN mst_area a ON a.id = c.id_area
        WHERE YEAR(c.date) = '2023' AND a.area = 'OCI-1'`, {
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

exports.costmonitoringoci1past = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT DATE_FORMAT(date, '%Y') AS year, DATE_FORMAT(date, '%m') AS month, c.category, c.budget, c.actual, a.area 
        FROM cost_order c
        JOIN mst_area a ON a.id = c.id_area
        WHERE YEAR(c.date) = '2022' AND a.area = 'OCI-1'`, {
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

exports.finishgoodoci1 = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT DATE_FORMAT(f.date, '%Y') AS year, DATE_FORMAT(f.date, '%m') AS month, f.fg_eq , a.area
        FROM finish_good_product f
        JOIN mst_area a ON f.id_area = a.id
        WHERE a.area = 'OCI-1'`, {
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

exports.costmonitoringoci2 = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT DATE_FORMAT(date, '%Y') AS year, DATE_FORMAT(date, '%m') AS month, c.category, c.budget, c.actual, a.area 
        FROM cost_order c
        JOIN mst_area a ON a.id = c.id_area
        WHERE YEAR(c.date) = '2023' AND a.area = 'OCI-2'`, {
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

exports.costmonitoringoci2past = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT DATE_FORMAT(date, '%Y') AS year, DATE_FORMAT(date, '%m') AS month, c.category, c.budget, c.actual, a.area 
        FROM cost_order c
        JOIN mst_area a ON a.id = c.id_area
        WHERE YEAR(c.date) = '2022' AND a.area = 'OCI-2'`, {
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

exports.finishgoodoci2 = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT DATE_FORMAT(f.date, '%Y') AS year, DATE_FORMAT(f.date, '%m') AS MONTH, f.fg_eq , a.area
        FROM finish_good_product f
        JOIN mst_area a ON f.id_area = a.id
        WHERE a.area = 'OCI-2' `, {
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

exports.costmonitoringfsb = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT DATE_FORMAT(date, '%Y') AS year, DATE_FORMAT(date, '%m') AS month, c.category, c.budget, c.actual, a.area 
        FROM cost_order c
        JOIN mst_area a ON a.id = c.id_area
        WHERE YEAR(c.date) = '2023' AND a.area = 'FSB'`, {
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

exports.costmonitoringfsbpast = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT DATE_FORMAT(date, '%Y') AS year, DATE_FORMAT(date, '%m') AS month, c.category, c.budget, c.actual, a.area 
        FROM cost_order c
        JOIN mst_area a ON a.id = c.id_area
        WHERE YEAR(c.date) = '2022' AND a.area = 'FSB'`, {
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

exports.finishgoodfsb = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT DATE_FORMAT(f.date, '%Y') AS year, DATE_FORMAT(f.date, '%m') AS MONTH, f.fg_eq , a.area
        FROM finish_good_product f
        JOIN mst_area a ON f.id_area = a.id
        WHERE a.area = 'FSB' `, {
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

exports.currentcycle = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT id FROM mst_cycle  WHERE MONTH(start_date) = MONTH(NOW())`, {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json(
            get
        );
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.ciltreportoci2 = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT p.id, s.section, ss.sub_section , p.activity, MONTH(c.start_date), p.result, p.tgl_cek , p.id_cycle, p.next_cycle
        FROM tr_pengecekan_aktif p 
    JOIN mst_cycle c ON c.id = p.id_cycle
    JOIN mst_sub_section ss ON ss.id = p.id_sub_section
	 JOIN mst_section s ON s.id = ss.id_section WHERE month(c.start_date) = MONTH(NOW()) AND p.id_area = 2`, {
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
exports.ciltreportfsb = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT p.id, s.section, ss.sub_section , p.activity, MONTH(c.start_date), p.result, p.tgl_cek , p.id_cycle, p.next_cycle
        FROM tr_pengecekan_aktif p 
    JOIN mst_cycle c ON c.id = p.id_cycle
    JOIN mst_sub_section ss ON ss.id = p.id_sub_section
	 JOIN mst_section s ON s.id = ss.id_section WHERE month(c.start_date) = MONTH(NOW()) AND p.id_area = 3`, {
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
exports.ciltreportoci1 = async (req, res) => {
    try {
        get = await config.connect1.query(`SELECT p.id, s.section, ss.sub_section , p.activity, MONTH(c.start_date), p.result, p.tgl_cek , p.id_cycle, p.next_cycle
        FROM tr_pengecekan_aktif p 
    JOIN mst_cycle c ON c.id = p.id_cycle
    JOIN mst_sub_section ss ON ss.id = p.id_sub_section
	 JOIN mst_section s ON s.id = ss.id_section WHERE month(c.start_date) = MONTH(NOW()) AND p.id_area = 1`, {
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

