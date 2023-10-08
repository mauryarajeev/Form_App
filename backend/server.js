
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
