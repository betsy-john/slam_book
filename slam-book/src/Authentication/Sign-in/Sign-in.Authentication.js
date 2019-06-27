import React from 'react';
import './Sign-in.Authentication.css';

function SignIn() {
  return (
    <div className="SignIn">
      <header className="SignIn-header">
        <textarea
          className="SignIn-textarea"
          rows="4"
          cols="50"
          defaultValue="Type your mind here."
        >
        </textarea>
        <br/>
        <button className="SignIn-button">Button</button>
      </header>
    </div>
  );
}

export default SignIn;
