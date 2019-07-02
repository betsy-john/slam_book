import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import TopNavigationBar from '../Top-navigation-bar/Top-Navigation-Bar';

function Dashboard() {
  return (
    <div className="Dashboard">
      <TopNavigationBar component={TopNavigationBar} />
      <header className="Dashboard-header">
        <span className="Dashboard-title">Dashboard</span>
        <br />
        <span className="Dashboard-title">This Page is under Construction.</span>
      </header>
    </div>
  );
};

export default Dashboard;
