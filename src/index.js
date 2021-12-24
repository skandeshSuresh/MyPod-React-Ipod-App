import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

// render app component to browser DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
