const express = require('express');
const router = express.Router();
const authController = require('../Controller/AuthController');

router.route('/register').post(authController.register);
router.route('/signIn').post(authController.signIn);
module.exports = router;
