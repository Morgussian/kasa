import React from 'react';
import './Footer.css';
import logo from '../../assets/images/LOGO_white_small.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src = {logo} alt =' logo '></img>
            <p>2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;