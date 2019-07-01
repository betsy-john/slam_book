import React from 'react';
import './Sign-in.Authentication.css';
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="SignIn">
      <header className="SignIn-header">
        <span className="SignIn-title">Login to your Account</span>
        <br />
        <input
          className="SignIn-input-email"
          type="email"
          name="email"
          defaultValue="abc@xyz.com"
        >
        </input>
        <br />
        <input
          className="SignIn-input-password"
          type="password"
          name="password"
          defaultValue="*********"
        >
        </input>
        <br />
        <Link to='/dashboard'>
          <button className="SignIn-button">Sign In</button>
        </Link>
      </header>
    </div>
  );
}

export default SignIn;
