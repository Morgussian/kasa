/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient le footer
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';
import './Footer.css';
import logo from '../../assets/images/LOGO_white_small.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <img src = {logo} alt =' logo '></img>
            <p>2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;