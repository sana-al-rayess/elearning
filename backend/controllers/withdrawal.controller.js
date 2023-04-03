const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Course = require("../models/courseModel");
const Enrollment = require('../models/enrollmentModel');
const User = require('../models/userModel');
const Withdrawal = require('../models/withdrawalModel');



exports.createWithdrawal = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const enrollment = await Enrollment.findOne({ user_email: user.email, course_id: req.body.course_id });
      if (!enrollment) {
        return res.status(404).json({ message: 'Enrollment not found' });
      }
  
      const withdrawal = new Withdrawal({
        user_email: user.email,
        course_id: enrollment.course_id,
        reason: req.body.reason
      });
      await withdrawal.save();
  
      return res.status(201).json({ message: 'Withdrawal request submitted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  

exports.approveWithdrawal = async (req, res) => {
    try {
      const withdrawal = await Withdrawal.findById(req.params.id);
      if (!withdrawal) {
        return res.status(404).json({ message: 'Withdrawal not found' });
      }
  
      withdrawal.status = 'approved';
      await withdrawal.save();
  
      return res.status(200).json({ message: 'Withdrawal request approved successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  exports.rejectWithdrawal = async (req, res) => {
    try {
      const withdrawal = await Withdrawal.findByIdAndUpdate(
        req.params.id,
        { status: 'rejected' },
        { new: true }
      ).populate('user_email course_id');
      if (!withdrawal) {
        return res.status(404).json({ message: 'Withdrawal not found' });
      }
    
  
      return res.status(200).json({ message: 'Withdrawal request rejected successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  