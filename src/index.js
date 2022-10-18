/**
* Ce fichier fait partie du projet Kasa.
*
* Il renvoit vers App.js
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';
//nouveau react 18
import {createRoot} from 'react-dom/client';
import './assets/Montserrat/static/Montserrat-Regular.ttf'
import {BrowserRouter as Router} from 'react-router-dom';
import './components/styles/index.css';
import App from './App';

//Header et Footer ne font pas partie du Routing
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//nouveau react 18
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Header />
    <App />
    <Footer />
  </Router>
);


