const express = require('express');
const router = express.Router();

const postApi = require('./post');
const userApi = require('./user');

const loginApi = require('./login')
const logoutApi = require('./logout')
const registerApi = require('./register')

router.use('/posts', postApi);
router.use('/users', userApi);
router.use('/login', loginApi)
router.use('/logout', logoutApi)
router.use('/register', registerApi)

module.exports = router;
