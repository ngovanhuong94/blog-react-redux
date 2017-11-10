const express = require('express');
const router = express.Router();

const postApi = require('./post');
const userApi = require('./user');

const loginApi = require('./login')
const logoutApi = require('./logout')

router.use('/posts', postApi);
router.use('/users', userApi);
router.use('/login', loginApi)
router.use('/logout', logoutApi)

module.exports = router;
