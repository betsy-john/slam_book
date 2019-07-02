import React from 'react';
import ReactDOM from 'react-dom';
import TopNavigationBar from './Top-Navigation-Bar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopNavigationBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
