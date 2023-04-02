const express = require('express');
const router = express.Router();

const { getCourses } = require("../controllers/course.controllers")

router.get('/getCourses', getCourses);

module.exports = router;
