import React from 'react';
import './Top-Navigation-Bar.css';
import { Link } from 'react-router-dom';

function TopNavigationBar() {
  return (
    <div className="TopNavigationBar">
      <Link to='/'>
        <span className="active">Home</span>
      </Link>
      <Link to='/'>
        <span>News</span>
      </Link>
      <Link to='/'>
        <span>Contact</span>
      </Link>
      <Link to='/'>
        <span>About</span>
      </Link>
      <Link to='/'>
        <span>Logout  </span>
      </Link>
    </div>
  );
};

export default TopNavigationBar;
