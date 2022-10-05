import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import FicheLogement from './screens/FicheLogement/FicheLogement';

function App() {
  return (
    
    <Routes>
            
      
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/:id' element = {<FicheLogement/>}/>
      <Route path = '/about' element = {<About/>}/>
      
      
    </Routes>
  )
}

export default App;
