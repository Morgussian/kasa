import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'

export default function Header(){
    return(
        <div className='header'> 
            <img src={logo} alt = 'logo'></img>
            <nav>
                <Link to = '/'>Accueil</Link>
                <Link to = '/about'>A Propos</Link>
            </nav>
        </div> 
    )
}