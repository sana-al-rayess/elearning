const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Course = require("../models/courseModel");
const Enrollment = require('../models/enrollmentModel');
const User = require('../models/userModel');
const Withdrawal = require('../models/withdrawalModel');


exports.addCourse = async (req, res) => {
    const { title, description, instructor_id } = req.body;
  
    try {
      const course = new Course({
        title,
        description,
        instructor_id
      });
  
      await course.save();
      res.status(201).json({ message: 'Course added successfully', course });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error });
    }
  };

  exports.getCourses = async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json({ message: 'Courses retrieved successfully', courses });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error });
    }
  };

  
  exports.createEnrollment = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.user_email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const enrollment = new Enrollment({
        user_email: user.email,
        course_id: req.body.course_id
      });
      await enrollment.save();
      res.status(201).json({ message: 'Enrollment created' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
 
  exports.listEnrolledStudents = async (req, res) => {
    try {
      const enrolledStudents = await Enrollment.find()
        .populate('user_email', 'name email')
        .populate('course_id', 'name');
  
      return res.status(200).json(enrolledStudents);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  

  
  
  
  
  
