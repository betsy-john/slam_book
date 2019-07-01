import React from 'react';
import './Index.css';
import SignIn from '../Authentication/Sign-in/Sign-in.Authentication';
import Dashboard from '../Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Index() {
  return (
    <Router>
      <div className="Index">
        <header className="Index-header">
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default Index;
