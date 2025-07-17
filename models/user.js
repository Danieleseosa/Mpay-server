const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/,
      "Please provide a valid email",
    ],
  },

  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);

// /^[a-zA-Z0–9. _%+-]+@[a-zA-Z0–9. -]+\. [a-zA-Z]{2,}$/

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODc3OTQ1ZTQyMGJkZjAzNDU4MTkwNzciLCJpYXQiOjE3NTI2NjcyMzEsImV4cCI6MTc1MjkyNjQzMX0.QF6HaBx78HWwFUv9rPptDop9lzJelRGwGMt5NqnA3x4" - Token
