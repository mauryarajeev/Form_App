import React, { useState } from 'react';
import './Form.css';
import CircleWithIcon from './fromHead';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    course: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State for controlling the popup

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePopup = () => {
    setIsSubmitted(!isSubmitted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully.');
        togglePopup(); // Show the popup
        setFormData({
          name: '',
          email: '',
          mobile: '',
          city: '',
          course: '',
        });
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <CircleWithIcon />
          <div className="input-group">
            <label>
              <i className="fa fa-user"></i> Name
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              <i className="fa fa-envelope"></i> Email
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              <i className="fa fa-phone"></i> Mobile Number
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              <i className="fa fa-map-marker"></i> City
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              <i className="fa fa-book"></i> Course
              <input
                type="text"
                name="course"
                placeholder="Course"
                value={formData.course}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <p>
            By submitting this form, you accept and agree to our{' '}
            <span style={{ color: 'blue' }}>terms and conditions</span>
          </p>
          <h2 style={{ color: 'orange' }}>Already Registered? Click Here To Login</h2>
        </form>
      </div>
      {isSubmitted && ( // Conditional rendering for the popup
        <div className="popup-card">
          <p>Your form has been submitted successfully!</p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </>
  );
};

export default Form;
