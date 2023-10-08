import React from 'react';
import './CircleWithIcon.css'; // Create this CSS file for styling
import 'font-awesome/css/font-awesome.min.css';

const CircleWithIcon = () => {
  return (
    <div className="circle-container">
      <div className="circle">
          <i className="fa fa-book fa-stack-50x"></i>
          <i className="fa fa-pencil fa-stack-50x fa-inverse"></i> 
      </div>
      <div className="content">
        <h1 style={{ color: 'orange' }}>Register Now To Apply</h1>
        <h2>Get the latest details and updates</h2>
      </div>
    </div>
  );
};

export default CircleWithIcon;


