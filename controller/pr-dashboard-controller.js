const config = require('../config/connection.js');
const Sequelize = require('sequelize');

exports.totalRequest = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT * FROM mst_pr`, {
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

exports.totalRequestWithNumber = async (req, res) => {
    try {
        const get = await config.connect1.query("SELECT * FROM mst_pr WHERE pr_number != 0", {
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

exports.totalRequest1vendor = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT * FROM mst_pr WHERE ( v_name IS NOT NULL AND v_value IS NOT NULL AND v_name != '') AND (v2_name IS null OR v2_value IS NULL OR v2_name = '' OR v2_name = '')`, {
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

exports.totalRequest2vendor = async (req, res) => {
    try {
        const get = await config.connect1.query(`SELECT * FROM mst_pr WHERE ( v_name IS NOT NULL AND v_value IS NOT NULL AND v_name != '') AND (v2_name IS NOT NULL AND v2_value IS NOT NULL AND v2_name != '')`, {
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

