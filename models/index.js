'use strict'

const Sequelize = require('sequelize')
const db = {}

const config = {
  "username": "r5bgq7x3zp4u38ul",
  "password": "edz9vhv0rhgpj00a",
  "database": "wttmzr8hjj3blrml",
  "host": "kfgk8u2ogtoylkq9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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