import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <ul>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Dashboard;
