import React from 'react';
//nouveau react 18
import {createRoot} from 'react-dom/client';

import {BrowserRouter as Router} from 'react-router-dom';
import './components/styles/index.css';
import App from './App';

//nouveau react 18
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);


