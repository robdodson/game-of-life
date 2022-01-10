import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App rows={20} cols={20} delay={200} />
  </React.StrictMode>,
  document.getElementById('root')
);
