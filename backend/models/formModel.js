// models/formModel.js

const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  city: String,
  course: String,
});

module.exports = mongoose.model('Form', FormSchema);
