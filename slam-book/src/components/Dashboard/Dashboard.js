import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <span className="Dashboard-title">Dashboard</span>
        <br />
        <Link to='/'>
          <button className="Dashboard-button">Logout</button>
        </Link>
      </header>
    </div>
  );
}

export default Dashboard;
