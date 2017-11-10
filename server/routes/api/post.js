const express = require('express');
const router = express.Router();
const chalk = require('chalk');

const { Post } = require('../../models');

// get all of posts from database (admin)
router.get('/', (req, res) => {

    Post.findAll()
    .then(res.send)
    .catch(console.error);
});

// get one post from database (admin)
router.get('/:postId', (req, res) => {
  Post.findById(req.body.id)
  .then(res.send)
  .catch(console.error);
});

// create one post in database (admin)
router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    intro_paragraph: req.body.introParagraph,
    content: req.body.content
  })
  .then((post) => {
    res.send(post);
  })
  .catch(console.error);
});

// update one post in database (admin)
router.put('/:postId', (req, res) => {
  Post.update(req.body)
  .then(res.send)
  .catch(console.error);
});

// delete one post from database (admin)
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
