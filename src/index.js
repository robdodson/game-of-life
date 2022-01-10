import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App rows={10} cols={10} delay={200} />
  </React.StrictMode>,
  document.getElementById('root')
);
