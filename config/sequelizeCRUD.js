// REQUIREMENT AND IMPORTING
const Sequelize = require('sequelize');
var moment = require('moment');
const connect = require("./connection");
'use strict';
const {
    Model
} = require('sequelize');
// const mod = require('../global/variable');

//////////////////
// CREATE TABLE //
//////////////////
async function creatTable(tbName) {
    // console.log(dbName);
    // CREATE TABLE WITH COLUMN IF NOT EXIST
    res = await connect.connect.define(tbName, {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
            primaryKey: false,
        },
        value: {
            type: Sequelize.INTEGER,
            allowNull: true,
            primaryKey: false,
        },
        alarmAt: {
            type: Sequelize.DATE,
            // defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            // defaultValue: "NULL",
            allowNull: true,
        },
        notActiveAt: {
            type: Sequelize.DATE,
            // defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            // defaultValue: "NULL",
            allowNull: true,
        },
        diffTime: {
            type: Sequelize.TIME,
            // defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            // defaultValue: "NULL",
            allowNull: true,
        },
        diffDay: {
            type: Sequelize.INTEGER,
            // defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            // defaultValue: "NULL",
            allowNull: true,
        },
        flag: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false,
        }
    }, { timestamps: false });
    connect.connect.sync();
    // okee = {
    //     [tbName]: function Mod(sequelize, DataTypes) {
    //         class Mod extends Model {
    //             /**
    //              * Helper method for defining associations.
    //              * This method is not a part of Sequelize lifecycle.
    //              * The `models/index` file will call this method automatically.
    //              */
    //             static associate(models) {
    //                 // define association here
    //             }
    //         }
    //         Mod.init({
    //             name: {
    //                 type: DataTypes.STRING,
    //             },
    //             value: {
    //                 type: DataTypes.INTEGER,
    //             },
    //             alarmAt: {
    //                 type: DataTypes.DATE,
    //             },
    //             notActiveAt: {
    //                 type: DataTypes.DATE,
    //             },
    //             diffTime: {
    //                 type: DataTypes.TIME,
    //             },
    //             diffDay: {
    //                 type: DataTypes.INTEGER,
    //             },
    //             flag: {
    //                 type: DataTypes.STRING,
    //             }
    //         }, {
    //             sequelize,
    //             modelName: tbName,
    //         });
    //         return Mod;
    //     }
    // };
    // Object.assign(mod.modell, oke);
    // console.log(mod.modell);
};

///////////////////
// CREATE INSERT //
///////////////////
async function insert(table, columns, data) {

    // const modd = mod.modell[table];
    // console.log(okee);
    // var mode = mod.Mod(connect.connect, Sequelize);
    // INSERT INTO DATABASE WITH CONDITION
    var time = moment().format();
    if (data === 0) {
        // await mode.findOne({ where: { name: columns, flag: "Active" }, order: [['id', 'DESC']] }
        // ).then(async function (data1) {
        //     if (data1.length > 0) {
        //         // console.log(data1[0]);
        //         let item = data1[0];
        //         // var diff = moment(moment(time).diff(moment(item.alarmAt)));
        //         var diff = moment(moment(moment(time).diff(moment(item.alarmAt)))).subtract(7, 'h').subtract(1969, 'y');
        //         var day = diff.days() - 1;
        //         var difftime = moment(diff).format('HH:mm:ss');
        //         // console.log(item.alarmAt + " " + moment(time).format());
        //         // console.log(moment(difftime).subtract(7,'h').subtract(1969,'y').format());
        //         console.log(difftime);
        //         if (moment(item.alarmAt).format('YYYYMMDDHHmmss').toString() === moment(time).format('YYYYMMDDHHmmss').toString()) {
        //             await mode.destroy({ where: { name: columns, flag: "Active" }, order: [['id', 'DESC']] });
        //         } else {
        //             var input = {
        //                 value: data,
        //                 notActiveAt: time,
        //                 flag: 'notActive',
        //                 diffTime: difftime,
        //                 diffDay: day
        //             }
        //             await mode.update(input, { where: { name: columns, flag: "Active" }, order: [['id', 'DESC']] });
        //         }
        //     }
        // });

        await connect.connect.query("SELECT * FROM " + table + "s WHERE name = '" + columns + "' AND flag = 'Active' ORDER BY id DESC LIMIT 1", {
            type: Sequelize.QueryTypes.SELECT
        }).then(async function (data1) {
            // console.log(data1);
            if (data1.length > 0) {
                // console.log(data1[0]);
                let item = data1[0];
                // var diff = moment(moment(time).diff(moment(item.alarmAt)));
                var diff = moment(moment(moment(time).diff(moment(item.alarmAt)))).subtract(7, 'h').subtract(1969, 'y');
                var day = diff.days() - 1;
                var difftime = moment(diff).format('HH:mm:ss');
                // console.log(item.alarmAt + " " + moment(time).format());
                // console.log(moment(difftime).subtract(7,'h').subtract(1969,'y').format());
                // console.log(difftime);
                if (moment(item.alarmAt).format('YYYYMMDDHHmmss').toString() === moment(time).format('YYYYMMDDHHmmss').toString()) {
                    await connect.connect.query("DELETE FROM " + table + "s WHERE name = '" + columns + "' AND flag = 'Active' ORDER BY id DESC LIMIT 1", {
                        type: Sequelize.QueryTypes.DELETE
                    });
                } else {
                    await connect.connect.query("UPDATE " + table + "s SET value = " + data + ", notActiveAt = '" + time + "',flag = 'notActive',diffTime='" + difftime + "',diffDay=" + day + " WHERE name = '" + columns + "' AND flag = 'Active' ORDER BY id DESC LIMIT 1", {
                        type: Sequelize.QueryTypes.UPDATE
                    });
                }
            }
        });
        // console.log(result[columns]);
    } else {
        // await mode.findOne({ where: { name: columns, flag: "Active" }, order: [['id', 'DESC']] }
        // ).then(async function (data1) {
        //     // console.log(table + " " + columns + " " + data1.length);
        //     if (data1.length === 0) {
        //         var input = {
        //             name: columns,
        //             value: data,
        //             alarmAt: time,
        //             flag: 'Active',
        //         }
        //         await mode.create(input);
        //     }
        // });
        await connect.connect.query("SELECT * FROM " + table + "s WHERE name = '" + columns + "' AND flag = 'Active' ORDER BY id DESC LIMIT 1", {
            type: Sequelize.QueryTypes.SELECT
        }).then(async function (data1) {
            // console.log(table + " " + columns + " " + data1.length);
            if (data1.length === 0) {
                await connect.connect.query("INSERT INTO " + table + "s (name,value,alarmAt,flag) VALUES ('" + columns.toString() + "'," + data.toString() + ",'" + time + "','Active')", {
                    type: Sequelize.QueryTypes.INSERT
                });
            }
        });
    }
}

module.exports = {
    creatTable,
    insert,
};