const { Sequelize, db } = require('./db');

const User = db.define('User', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = { Sequelize, db, User };
