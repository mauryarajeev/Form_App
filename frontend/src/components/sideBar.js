import React from 'react';
import './sidebar.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faFilter, faBrain, faMoneyBillWave, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ backgroundColor: 'grey' }}>
      <h2  style={{ color: 'black' }}>How collageduniya help you in admission</h2>
      <div className="row">
        <div className="square">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
            <p>Browcher Details</p>
          </div>
        </div>
        <div className="square">
          <div className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>Check Details Fees</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="square">
          <div className="icon">
            <FontAwesomeIcon icon={faFilter} />
            <p>Shortlist & Apply</p>
          </div>
        </div>
        <div className="square">
          <div className="icon">
            <FontAwesomeIcon icon={faBrain} />
            <p>24/7 Counselling</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="square">
          <div className="icon">
            <FontAwesomeIcon icon={faMoneyBillWave} />
            <p>Scholarship</p>
          </div>
        </div>
        <div className="square">
          <div className="icon">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <p>Application Deadline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
