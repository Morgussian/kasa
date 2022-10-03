import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <div> 
            <img src = '../../data' alt = 'logo'></img>
            <nav>
                <Link to = '/'>Accueil</Link>
                <Link to = '/about'>A Propos</Link>
            </nav>
        </div> 
    )
}