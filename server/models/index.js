const { Sequelize, db, Post } = require('./post');
const { User } = require('./user');

Post.belongsTo(User, { as: 'author' });
User.hasMany(Post);

module.exports = { Sequelize, db, Post, User };
