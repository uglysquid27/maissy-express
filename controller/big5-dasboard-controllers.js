var express = require('express');
const db = require('../models/relation');
const Sequelize = require('sequelize');
const connect = require("../config/connection");
const { where } = require('sequelize');

var app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

exports.read = async (req, res) => {
    try {
        // const post = req;
        const post = await db.table.findAll().then(
            async function (data){
                var repond = [];
                for (let k in data) {
                    const {name,id} = data[k];
                    var temp = await connect.connect.query("SELECT `name`,COUNT(*) FROM "+ name +"s GROUP BY `name` ORDER BY COUNT(*) DESC LIMIT 5",{
                        type: Sequelize.QueryTypes.SELECT
                    });
                    repond.push(name,id,temp);
                };
                return repond;
            }
        );
        return res.status(200).json({
            post,
        });
        // return res.status(201).req;
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.readbyid = async (req, res) => {
    try {
        const name = req.body.name;
        const post = await connect.connect.query("SELECT `name`,COUNT(*) FROM "+ name +"s WHERE alarmAt  GROUP BY `name` ORDER BY COUNT(*) DESC LIMIT 5",{
                        type: Sequelize.QueryTypes.SELECT
                    });
        return res.status(200).json({
            post,
        });
        // return res.status(201).req;
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.readbydate = async (req, res) => {
    try {
        const name = req.body.name;
        const start = req.body.startDate;
        const end = req.body.endDate;
        const post = await connect.connect.query("SELECT `name`,COUNT(*) FROM "+ name +"s WHERE alarmAt BETWEEN '"+start+"' AND '"+end+"' GROUP BY `name` ORDER BY COUNT(*) DESC LIMIT 5",{
                        type: Sequelize.QueryTypes.SELECT
                    });
        return res.status(200).json({
            post,
        });
        // return res.status(201).req;
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};