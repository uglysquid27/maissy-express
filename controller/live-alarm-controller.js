const config2 = require('../config/connection.js');
const Sequelize = require('sequelize');
const moment = require("moment");

exports.read = async (req, res) => {
    try {
        get = await config2.connectNode.query(`SELECT * from mst_dummies`, {
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
