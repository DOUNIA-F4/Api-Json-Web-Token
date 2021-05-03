const express = require('express');
const { requireSignIn } = require('../middlwares/auth');
const {userById} = require('../middlwares/user');
const requiredRole = require('../middlwares/checkRole');
const {Exemple} = require('../controllers/testController');

const router = express.Router();

router.post('/test',requireSignIn, userById, requiredRole('Admin'), Exemple)

module.exports = router;