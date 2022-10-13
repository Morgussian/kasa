/**
* Ce fichier fait partie du projet Kasa.
*
* Il renvoie au composant Router qui contient les paths du site
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Router from './components/Router'

function App() {
  return (
    <Routes>
        <Route path = '*' element = {<Router/>}></Route>
    </Routes>
  )
}

export default App;
