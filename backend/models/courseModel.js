const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor_id: {
    type: String,
    ref: 'User',
    required: true
  }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
