// studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.get('/', studentController.getAllStudents);
router.post('/', studentController.addStudent);

module.exports = router;
