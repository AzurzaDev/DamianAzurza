const express = require('express');
const { register, login, getAllAdmins } = require('../controllers/authController');
const router = express.Router();


router.post('/register', register);


router.post('/login', login);

router.get('/admins', getAllAdmins);

module.exports = router;