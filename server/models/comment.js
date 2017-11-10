var {Sequelize , db} = require('./db')

var Comment = db.define('comment', {
  content: {
    type: Sequelize.TEXT
  }
})


module.exports = {Sequelize, db, Comment}
