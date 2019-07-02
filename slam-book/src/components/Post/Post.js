import React from 'react';
import './Post.css';
import Index from '../Index/Index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
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
          <br />
          <Link to='/index'>
            <button className="Post-button">Button</button>
          </Link>
          <br />
        </header>
      </div>
  );
}

function Post() {
  return (
    <Router>
      <div className="Post">
        <header className="Post-header">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/index" exact component={Index} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default Post;
