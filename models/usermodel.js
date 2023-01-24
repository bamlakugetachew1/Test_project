const validator = require('validator');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide a username']
  },
  email: {
    type: String,
    required: [true, 'please provide a email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please provide a valid email']
  },
  gender:{
    type:String,
    enum:['Male','Female'],
    default:'Male'
  },
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
}
);
const User = mongoose.model('User', userSchema);
module.exports = User;
