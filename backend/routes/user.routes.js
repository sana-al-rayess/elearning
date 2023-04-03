const express = require('express');
const router = express.Router();

const { getCourses } = require("../controllers/course.controllers")
router.get('/getCourses', getCourses);


const {createEnrollment} = require('../controllers/course.controllers');
router.post('/enroll', createEnrollment);


const {createWithdrawal} = require('../controllers/course.controllers');
router.post('/withdraw', createWithdrawal);

const {approveWithdrawal} = require('../controllers/course.controllers');
router.post('/approve', approveWithdrawal);

module.exports = router;