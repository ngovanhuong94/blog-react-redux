const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DB_NAME || 'blogreactredux',
  process.env.DB_NAME || 'blogreactredux',
  process.env.DB_NAME || 'blogreactredux',{
    dialect: process.env.DIALECT || 'sqlite',
    host: process.env.HOST || 'localhost',
    storage: process.env.STORAGE || './blogreactredux.sqlite'
  }
)
db.authenticate()
.then(() => console.log("Connect Successfully"))
.catch(err => console.log(err))
module.exports = { Sequelize, db };
