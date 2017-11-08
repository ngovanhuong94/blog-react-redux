const express = require('express');
const router = express.Router();
const chalk = require('chalk');

const { Post, User, db } = require('../../models');

// get all of posts from database
router.get('/', (req, res) => {
//   db.sync({ force: true })
//   .then(() => {
//     console.log(chalk.blue('we are here'));
//     Post.findAll()
//     .then(res.send)
//     .catch(console.error);
//   })
//   .catch(console.error);
    Post.findAll()
    .then(res.send)
    .catch(console.error);
});

// get one post from database
router.get('/:postId', (req, res) => {
  Post.findById(req.body.id)
  .then(res.send)
  .catch(console.error);
});

// create one post in database
router.post('/', (req, res) => {
  Post.create(req.body)
  .then((post) => {
    res.send(post);
  })
  .catch(console.error);
});

// update one post in database
router.put('/:postId', (req, res) => {
  Post.update(req.body)
  .then(res.send)
  .catch(console.error);
});

// delete one post from database
router.delete('/:postId'), (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(res.send)
  .catch(console.error);
}

module.exports = router;
