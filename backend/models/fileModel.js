const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String 
    },
    file_path: { 
      type: String, 
      required: true 
    },
    uploaded_by: { 
      type: String, 
      ref: 'User', 
      required: true 
    }
  });

  const File = mongoose.model("File", fileSchema);

  module.exports = File;