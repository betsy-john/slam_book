import React from 'react';
import './Post.css';

function Post() {
  return (
    <div className="Post">
      <header className="Post-header">
        <textarea
          className="Post-textarea"
          rows="4"
          cols="50"
          defaultValue="Type your mind here."
        >
        </textarea>
        <br/>
        <button className="Post-button">Button</button>
      </header>
    </div>
  );
}

export default Post;
