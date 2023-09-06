"use strict";

// REQIREMENT AND IMPORTING
const db = require('../models/relation');

var obj = {};

////////////////////////////
// GENERATE MODEL FROM DB //
////////////////////////////
async function generate() {
    // DELETE ALL ITEM ON OBJ
    for (var item in obj) delete obj[item];

    // GET TABLE NAME
    await db.table.findAll().then(function (data) {
        for (let k in data) {
            const { name } = data[k];
            obj[name] = {};
        }
    });

    // GET ALARM
    await db.alarm.findAll({ include: [{ model: db.table }] }
    ).then(function (dataa) {
        for (let i in dataa) {
            const { device, node } = dataa[i];
            const { name } = dataa[i]["mst_table"];
            // console.log(name);
            delete obj[name][device];
            const data = {
                [device]: {
                    node: node,
                    decimal: 1,
                    column: device,
                },
            };
            Object.assign(obj[name], data);
        };
    });
    // console.log(obj);
}

// EXPORTING FOR ANOTHER FILE
module.exports = { obj, generate };
