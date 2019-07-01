import React from 'react';
import './Sign-up.Authentication.css';
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className="SignUp">
      <header className="SignUp-header">
        <span className="SignUp-title">Register</span>
        <br />
        <input
          className="SignUp-input-email"
          type="text"
          name="Name"
          defaultValue="John Pubalo"
        >
        </input>
        <br />
        <input
          className="SignUp-input-email"
          type="email"
          name="email"
          defaultValue="abc@xyz.com"
        >
        </input>
        <br />
        <input
          className="SignUp-input-password"
          type="password"
          name="password"
          defaultValue="*********"
        >
        </input>
        <br />
        <input
          className="SignUp-input-password"
          type="tel"
          name="phone_number"
          defaultValue="8085171403"
        >
        </input>
        <br />
        <Link to='/'>
          <button className="SignUp-button">Register</button>
        </Link>
      </header>
    </div>
  );
}

export default SignUp;
