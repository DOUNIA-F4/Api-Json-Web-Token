const express = require('express');
const{ getOneUser } = require('../controllers/userController');
const { userById } = require('../middlwares/user');
const { requireSignIn, isAuth } = require('../middlwares/auth');

const router = express.Router();

router.get('/profile/:userId', requireSignIn, isAuth, getOneUser)

router.param('userId', userById)

module.exports = router;