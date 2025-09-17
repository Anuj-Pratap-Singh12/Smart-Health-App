const mongoose = require("mongoose");

// Define User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  location: {
    type: String,
    default: "",
  },
}, { timestamps: true });

// Create User model
const User = mongoose.model("User", UserSchema);

module.exports = User;
