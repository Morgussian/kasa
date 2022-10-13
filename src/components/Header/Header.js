/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient le header
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'
import './Header.css'

export default function Header(){
    return(
        <header className='header'> 
            <img src={logo} alt = 'logo'></img>
            <nav>
                <Link to = '/' className='link'>Accueil</Link>
                <Link to = '/about' className='link'>A Propos</Link>
            </nav>
        </header> 
    )
}