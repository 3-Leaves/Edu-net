const mongoose = require("mongoose");

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;
