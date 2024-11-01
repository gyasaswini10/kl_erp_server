// facultyRoutes.js
const express = require('express');
const router = express.Router();
const facultyController = require('../controller/facultyController');

router.get('/', facultyController.getAllFaculty);
router.post('/', facultyController.addFaculty);

module.exports = router;
