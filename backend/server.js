// const express = require('express');
// const mongoose = require('mongoose');
// const { validationResult, check } = require('express-validator');
// const cors = require('cors'); // Import the CORS middleware

// const app = express();
// const port = process.env.PORT || 5000;

// // Connect to MongoDB (replace with your MongoDB connection string)
// mongoose.connect('mongodb+srv://rajeev:rajeev@cluster0.qu3n4b4.mongodb.net/form_app?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

// const FormSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   mobile: String,
//   city: String,
//   course: String,
// });

// const FormModel = mongoose.model('Form', FormSchema);

// app.use(express.json());

// // Define validation rules for the form fields
// const formValidationRules = [
//   check('name').notEmpty().withMessage('Name is required'),
//   check('email').isEmail().withMessage('Invalid email address'),
//   check('mobile').isMobilePhone().withMessage('Invalid mobile number'),
//   check('city').notEmpty().withMessage('City is required'),
//   check('course').notEmpty().withMessage('Course is required'),
// ];

// // Enable CORS for all routes
// app.use(cors());

// app.post('/api/submit', formValidationRules, async (req, res) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const formData = req.body;
//     const newFormEntry = new FormModel(formData);
//     await newFormEntry.save();

//     res.status(201).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://rajeev:rajeev@cluster0.qu3n4b4.mongodb.net/form_app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Use form routes
app.use('/api', formRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
