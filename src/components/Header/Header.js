import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'
import './Header.css'

export default function Header(){
    return(
        <header className='header'> 
            <img src={logo} alt = 'logo'></img>
            <nav>
                <Link to = '/'>Accueil</Link>
                <Link to = '/about'>A Propos</Link>
            </nav>
        </header> 
    )
}