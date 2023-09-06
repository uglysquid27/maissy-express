const Sequelize = require('sequelize');
const env = ['development','duasatuempat','empattujuh','kluber', 'login'];
const config = require('./config.json')[env[0]];
const config1 = require('./config.json')[env[1]];
const config2 = require('./config.json')[env[2]];
const config3 = require('./config.json')[env[3]];
const configLogin = require('./config.json')[env[4]];

const connect = new Sequelize(config.database, config.username, config.password, config);
const connect1 = new Sequelize(config1.database, config1.username, config1.password, config1);
const connect2 = new Sequelize(config2.database, config2.username, config2.password, config2);
const connect3 = new Sequelize(config3.database, config3.username, config3.password, config3);
const connectEmployee = new Sequelize(configLogin.database, configLogin.username, configLogin.password, configLogin);

module.exports = {
    connect,
    connect1,
    connect2,
    connect3,
    connectEmployee,
}