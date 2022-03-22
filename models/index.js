'use strict'

const Sequelize = require('sequelize')
const db = {}

const config = {
  "username": "testuser",
  "password": "capstone2022",
  "database": "test001",
  "host": "127.0.0.1",
  "dialect": "mysql",
  "define": {
    "underscored": false,
    "freezeTableName": false,
    "charset": "utf8",
    "dialectOptions": {
      "collate": "utf8_general_ci"
    },
    "timestamps": true,
    "paranoid": true
  }
}
const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.User            = require('./user')(sequelize, Sequelize)

Object.keys(db).forEach(modelName => { if(db[modelName].associate) db[modelName].associate(db) })


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db