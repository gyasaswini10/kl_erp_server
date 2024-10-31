// routes/facultyRoutes.js

const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');

router.get('/faculty', facultyController.getAllFaculty);
router.get('/faculty/:id', facultyController.getFacultyById);
router.post('/faculty', facultyController.addFacultyMember);

module.exports = router;
