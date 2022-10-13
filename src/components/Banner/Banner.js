/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique de la bannière
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';
import './Banner.css'



const Banner = (props) => {
    
    return (
        <div className='banner--container'>
            <h1>{props.text}</h1>

            {/* Inline style pour l'image suivant affichage dans Home ou About */}
            <div style={{background : `url(${props.img})`, 
                borderRadius: 20
                }} className = 'banner--img'>
            </div>
        </div>
    );
};

export default Banner;