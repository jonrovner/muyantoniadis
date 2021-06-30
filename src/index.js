import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './context';
import App from './App';



ReactDOM.render(
  <StoreProvider>

  <Router>
    <App />
  </Router>

  </StoreProvider>,
  document.getElementById('root')
);


