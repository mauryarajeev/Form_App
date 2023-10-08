// controllers/formController.js

const { validationResult } = require('express-validator');
const FormModel = require('../models/formModel');

// Handle form submission
exports.submitForm = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const formData = req.body;
    const newFormEntry = new FormModel(formData);
    await newFormEntry.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
