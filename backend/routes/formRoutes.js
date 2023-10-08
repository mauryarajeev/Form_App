// routes/formRoutes.js

const express = require('express');
const { check } = require('express-validator');
const formController = require('../controllers/formController');

const router = express.Router();

// Define validation rules for the form fields
const formValidationRules = [
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Invalid email address'),
  check('mobile').isMobilePhone().withMessage('Invalid mobile number'),
  check('city').notEmpty().withMessage('City is required'),
  check('course').notEmpty().withMessage('Course is required'),
];

// Handle form submission
router.post('/submit', formValidationRules, formController.submitForm);

module.exports = router;
