import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Your main application component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance, you can use the following line:
reportWebVitals();
