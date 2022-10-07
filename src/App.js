import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
import { Routes, Route } from 'react-router-dom';

//Voici les quatre pages du site:
import Home from './screens/Home/Home';
import About from './screens/About/About';
import FicheLogement from './screens/FicheLogement/FicheLogement';
import Err404 from './screens/404/Err404';

function App() {
  return (
    
    <Routes>
            
      
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/404' element = {<Err404/>}/>
      <Route path = '/Fiche_Logement/:cid' element = {<FicheLogement/>}/>
      <Route path = '/about' element = {<About/>}/>
      
      
    </Routes>
  )
}

export default App;
