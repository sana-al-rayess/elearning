const mongoose = require("mongoose");


const withdrawalSchema = new mongoose.Schema({
    user_id: { 
      type: String, 
      ref: 'User', 
      required: true 
    },
    course_id: { 
      type: String, 
      ref: 'Course', 
      required: true 
    },
    reason: { 
      type: String 
    },
    status: { 
      type: String, 
      enum: ['approved', 'rejected'], 
      default: 'pending' 
    }
  });
  

  const Withdrawal = mongoose.model("Withdrawal", withdrawalSchema);

  module.exports = Withdrawal;