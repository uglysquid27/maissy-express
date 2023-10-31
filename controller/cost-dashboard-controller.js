const config = require('../config/connection.js');
const Sequelize = require('sequelize');

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
        FROM cost_order_oc2 c
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
        FROM cost_order_oc2 c
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
        FROM finish_good_product_oc2 f
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
        FROM cost_order_fsb c
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
        FROM cost_order_fsb c
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
        FROM finish_good_product_fsb f
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
