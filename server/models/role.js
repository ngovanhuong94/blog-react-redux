var {Sequelize , db} = require('./db')

var Role = db.define('role', {
  name: {
    type: Sequelize.STRING
  }
})


module.exports = {Sequelize, db, Role}
