const express = require('express');
const router = express.Router();

const { Signup_user, Login_user } = require('../Controller/authController');
const { Signup_validation, Login_Validation } = require('../Middleware/Validate_user');

router.post('/signup', Signup_validation, Signup_user);
router.post('/login', Login_Validation, Login_user);

module.exports = router;