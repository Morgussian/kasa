import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';

function App() {
  return (
    
    <Routes>
      
            
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
      
      
    </Routes>
  )
}

export default App;
