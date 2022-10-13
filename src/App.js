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
