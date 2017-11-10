var {Sequelize , db} = require('./db')

var Permission = db.define('permission', {
  name: {
    type: Sequelize.STRING
  }
})


module.exports = {Sequelize, db, Permission}
