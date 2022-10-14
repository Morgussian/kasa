import React from 'react';
import { Routes, Route,} from 'react-router-dom';

import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import FicheLogement from '../screens/FicheLogement/FicheLogement';
import Err404 from '../screens/404/Err404';



const Router = () => {
    return (
        <Routes>
            <Route path = '/' element = {<Home/>}></Route>
            <Route path = '*' element = {<Err404/>}></Route>
            <Route path = '/Fiche_Logement/:cid' element = {<FicheLogement/>}></Route>
            <Route path = '/about' element = {<About/>}></Route>
        </Routes>
    );
};

export default Router;