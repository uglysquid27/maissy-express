const config2 = require('../config/connection.js');
const connect2 = require('../config/connection.js');
const Sequelize = require('sequelize');
const moment = require("moment");
const validator = require("fastest-validator");
const v = new validator();
const { pdm_limit } = require("../models/pdm_limit");

exports.node_tables = async (req, res) => {
    try {
        get = await config2.connectNode.query(`SHOW TABLES`, {
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

exports.cvpack1 = async (req, res) => {
    try {
        get = await config2.connectNode.query(`SELECT * from current_cv_pack1 c ORDER BY c.time DESC LIMIT 10`, {
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

exports.limit = async (req, res) => {
    try {
        get = await config2.connect2.query(`SELECT * from mst_set_limit`, {
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

exports.try = async (req, res) => {
    const devices = [
        { device: 'Device_350ML', value: 'Mode_350ML' },
        { device: 'Device_500ML', value: 'Mode_500ML' },
        { device: 'Device_900ML', value: 'Mode_900ML' },
        { device: 'Device_CSIOP', value: 'Mode_CSIOP' },
        { device: 'Device_Formalin', value: 'Mode_Formalin' },
        { device: 'Device_H2O2', value: 'Mode_H2O2' },
        { device: 'Device_Nightime', value: 'Mode_Nightime' },
        { device: 'Device_Production', value: 'Mode_Production' },
        { device: 'Device_Current_M01', value: 'Current_M01' },
        { device: 'Device_Current_M01B', value: 'Current_M01B' },
        { device: 'Device_Current_MG1', value: 'Current_MG1' },
        { device: 'Device_Current_MG2', value: 'Current_MG2' },
        { device: 'Device_Current_M02', value: 'Current_M02' },
        { device: 'Device_Current_M03', value: 'Current_M03' },
        { device: 'Device_Current_M16', value: 'Current_M16' },
        { device: 'Device_Current_M17', value: 'Current_M17' },
        { device: 'Device_Current_M18', value: 'Current_M18' },
        { device: 'Device_Current_M19', value: 'Current_M19' },
        { device: 'Device_Current_M21', value: 'Current_M21' },
        { device: 'Device_Current_M22', value: 'Current_M22' },
        { device: 'Device_Current_M41', value: 'Current_M41' },
        { device: 'Device_Current_M104', value: 'Current_M104' },
        { device: 'Device_Current_M105', value: 'Current_M105' },
        { device: 'Device_Current_M106', value: 'Current_M106' },
        { device: 'Device_Current_M107', value: 'Current_M107' },
        { device: 'Device_Current_M108', value: 'Current_M108' },
        { device: 'Device_Current_M109', value: 'Current_M109' },
        { device: 'Device_Current_M110', value: 'Current_M110' },
        { device: 'Device_Current_M111', value: 'Current_M111' },
        { device: 'Device_Current_M112', value: 'Current_M112' },
        { device: 'Device_Current_M113', value: 'Current_M113' },
        { device: 'Device_Current_M114', value: 'Current_M114' },
        { device: 'Device_Current_M115', value: 'Current_M115' },
        { device: 'Device_Current_M116', value: 'Current_M116' },
        { device: 'Device_Current_M117', value: 'Current_M117' },
        { device: 'Device_Current_M118', value: 'Current_M118' },
        { device: 'Device_Current_M119', value: 'Current_M119' },
        { device: 'Device_Current_M119A', value: 'Current_M119A' },
        { device: 'Device_Current_M119B', value: 'Current_M119B' },
        { device: 'Device_Current_M120', value: 'Current_M120' },
        { device: 'Device_Current_M120A', value: 'Current_M120A' },
        { device: 'Device_Current_M120B', value: 'Current_M120B' },
        { device: 'Device_Current_M121', value: 'Current_M121' },
        { device: 'Device_Current_M122', value: 'Current_M122' },
        { device: 'Device_Current_M123', value: 'Current_M123' },
        { device: 'Device_Current_M124', value: 'Current_M124' },
        { device: 'Device_Current_M124A', value: 'Current_M124A' },
        { device: 'Device_Current_M124B', value: 'Current_M124B' },
        { device: 'Device_Current_M124C', value: 'Current_M124C' },
        { device: 'Device_Current_M124D', value: 'Current_M124D' },
        { device: 'Device_Current_M124E', value: 'Current_M124E' },
        { device: 'Device_Current_M124F', value: 'Current_M124F' },
        { device: 'Device_Current_M124G', value: 'Current_M124G' },
        { device: 'Device_Current_M125', value: 'Current_M125' },
      ];

      try {
        const results = [];
        
        for (const device of devices) {
          const query = `SELECT epochtime, time, plc_time, ms, modify, lotno1, prod_order1, '${device.device}' AS Device, ${device.value} AS Value FROM node_red.v_cv_pack1_desc LIMIT 10`;
    
          const data = await config2.connectNode.query(query, {
            type: Sequelize.QueryTypes.SELECT
          });
          
          results.push(data);
        }
    
        return res.status(200).json(results);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};

exports.store = async (req, res) => {
    const { table_name, satis_limit, unsatis_limit, unaccept_limit } = req.body;
    
    // Validate the input data (you can use a validation library like Joi or Yup)
    if (!table_name || !satis_limit || !unsatis_limit || !unaccept_limit) {
        console.log(req.body)
        return res.status(400).json({ error: "Invalid input data" });
    }

    try {
        // Sanitize and insert data into the database using parameterized queries
        const result = await config2.connect2.query(
            'INSERT INTO mst_set_limit (table_name, satis_limit, unsatis_limit, unaccept_limit) VALUES (:table_name, :satis_limit, :unsatis_limit, :unaccept_limit)',
            {
                replacements: {table_name, satis_limit, unsatis_limit, unaccept_limit },
                type: Sequelize.QueryTypes.INSERT
            }
        );
            console.log(req.body);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message });
    }
};


// exports.store = async (req, res) => {
//     try {
//         const {
//             id,
//             satis_limit,
//             unsatis_limit,
//             unaccept_limit,
//         } = req.body;
//         //   const validate = v.validate(req.body);
//         //   if (validate.length) {
//         //     return res.status(400).json(validate);
//         //   }
//         const order = await pdm_limit.create({
//             id,
//             satis_limit,
//             unsatis_limit,
//             unaccept_limit,
//             createdAt: new Date(),
//             updatedAt: new Date(),
//         });
//         res.status(200).json(order);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// }