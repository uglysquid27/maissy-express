const Sequelize = require('sequelize');
const connection = require('../config/connection');
const mst_alarms = require('./mst_alarm');
const mst_tables = require('./mst_table');

var alarm = mst_alarms(connection.connect,Sequelize);
var table = mst_tables(connection.connect,Sequelize);

table.hasMany(alarm,{
    foreignKey: 'tableId'
});

alarm.belongsTo(table,{
    foreignKey: 'tableId',
    onDelete: 'CASCADE'
});

module.exports = {
    table,
    alarm
};