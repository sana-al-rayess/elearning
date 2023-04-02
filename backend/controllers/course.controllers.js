const Course = require("../models/courseModel");

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