const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Import the File model
const File = require("../models/fileModel");

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });



exports.uploadFile = async (req, res) => {
    try {
        const { name, description } = req.body;
        const file_path = req.file.path;
        const uploaded_by = req.user.username;

        
        const file = new File({ name, description, file_path, uploaded_by });
        await file.save();

        res.status(201).json({ message: "File uploaded successfully", file });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = router;
