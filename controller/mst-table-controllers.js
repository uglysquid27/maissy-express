var bodyParser = require('body-parser');
var express = require('express');
const db = require('../models/relation');
const seqCRUD = require('../config/sequelizeCRUD');
const connect = require('../config/connection');
const Sequelize = require('sequelize');

var app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

exports.create = async (req, res) => {
    try {
        // const post = req;
        const { name } = req.body;
        seqCRUD.creatTable(name);
        const post = await db.table.create(req.body);
        return res.status(201).json({
            post,
        });
        // return res.status(201).req;
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.read = async (req, res) => {
    try {
        // const post = req;
        const post = await db.table.findAll({ include: [{ model: db.alarm }] });
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
        // const post = req;
        const post = await db.table.findOne({ 
            where: req,
            include: [{ model: db.alarm }] 
        });
        return res.status(200).json({
            post,
        });
        // return res.status(201).req;
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.update = async (req, res) => {
    try {
        // const post = req;
        const post = await db.table.update(req.body);
        return res.status(201).json({
            post,
        });
        // return res.status(201).req;
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

exports.delete = async (req, res) => {
    try {
        // const post = req;
        const name = req.body.name;
        await connect.connect.query("DROP TABLE "+ name +"s;",{
            type: Sequelize.QueryTypes.DELETE
        });
        const post = await db.table.destroy({ where: req.body });
        return res.status(200).json({
            post,
        });
        // return res.status(201).req;
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};