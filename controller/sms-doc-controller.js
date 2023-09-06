const config = require('../config/connection.js');
const Sequelize = require('sequelize');

exports.read = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT m.menu, m.endpoint,d.server, m.id FROM maissy_dbs d
        JOIN maissy_menus m ON m.db_id = d.id
        `, {
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

exports.section = async(req, res) => {

    let id = req.params.id;

    try {
        const get = await config.connect1.query(`SELECT s.id, s.section, d.db_name, d.server, s.tables FROM maissy_section s 
        JOIN maissy_dbs d ON s.db_id = d.id WHERE menu_id = ${id}`, {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });

    }
    catch(error){
        return res.status(500).json({ error: error.message })
    }
};

exports.tables = async(req, res) => {

    let id = req.params.id;

    try {
        const get = await config.connect1.query(`SELECT d.db_name,t.table_name, t.column_name FROM maissy_tables t
        JOIN maissy_dbs d ON t.db_id = d.id
        JOIN maissy_section s ON t.section_id = s.id
        WHERE t.section_id = ${id}`, {
            type: Sequelize.QueryTypes.SELECT
        });
        return res.status(200).json({
            get
        });

    }
    catch(error){
        return res.status(500).json({ error: error.message })
    }
};