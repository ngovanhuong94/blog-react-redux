var router = require('express').Router()
const chalk = require('chalk')

const {User} = require('../../models')

router.post('/', (req,res) => {
  req.session.reset()
  res.send()
})

module.exports = router
