const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
    minlength: 5, // Minimum length of 8 characters
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  isAdmin: { 
    type: Boolean, 
    default: false 
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Compile the schema into a model
const User = mongoose.model('User', UserSchema);

module.exports = User;
