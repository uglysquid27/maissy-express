const config = require('../config/connection.js');
const Sequelize = require('sequelize');

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


