import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This imports the CSS for your app.
import App from './App'; // This imports the App component you just created.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is where your app will be inserted into the HTML.
);