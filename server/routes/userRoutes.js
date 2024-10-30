const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticateJWT');
const {register1, login1, Currentuser, updateUser, deleteUser} = require('../controllers/userController');

router.post('/register', register1);

router.post('/login', login1);

router.get('/me', authenticateJWT, Currentuser);

router.put('/me', authenticateJWT, updateUser);

router.delete('/me', authenticateJWT, deleteUser);

module.exports = router;