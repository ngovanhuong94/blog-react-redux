const { Sequelize, db } = require('./db');

const Post = db.define('Post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    set: function (value) {
      this.setDataValue('title', value.trim());
    }
  },
  urlTitle: {
    type: Sequelize.VIRTUAL,
    get: function () {
      var title = this.getDataValue('title')
      return title.replace(/\s+/g, '-')
    }
  },
  intro_paragraph: {
    type: Sequelize.STRING,
    get: function () {
      var intro = this.getDataValue('intro_paragraph')

      if (intro) {
        return intro
      } else {
        intro = this.getDataValue('content')
        intro = intro.substr(0,75)
        return `${intro}`
      }
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});
Post.sync()
module.exports = { Sequelize, db, Post };
