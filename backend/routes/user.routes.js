const express = require('express');
const router = express.Router();

const { getCourses } = require("../controllers/course.controllers")
router.get('/getCourses', getCourses);


const {createEnrollment} = require('../controllers/course.controllers');
router.post('/enroll', createEnrollment);


const {createWithdrawal} = require('../controllers/withdrawal.controller');
router.post('/withdraw', createWithdrawal);

const {approveWithdrawal} = require('../controllers/withdrawal.controller');
router.post('/:id/approve', approveWithdrawal);

const {rejectWithdrawal} = require('../controllers/withdrawal.controller');
router.post('/:id/reject', rejectWithdrawal);

const {listEnrolledStudents} = require('../controllers/course.controllers');
router.get('/:id/students', listEnrolledStudents);

module.exports = router;

