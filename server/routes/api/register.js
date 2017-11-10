var router = require('express').Router()
var chalk = require('chalk')


const {User} = require('../../models')
router.post('/', (req,res) => {
  User.create(req.body)
  .then(user => {
    console.log(user)
    res.send(user)
  })
  .catch(err => {
    res.send(err.message)
  })
})

module.exports = router
