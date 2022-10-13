/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique d'affichage des thumbs (cards)
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';
import './Thumb.css'
import { Link } from 'react-router-dom'


//(props) c'est toutes les propriétés qu'on passe à l'appel de thumb (voir ThumbContainer) ici un ID, l'URL d'une photo cover et un titre h3
const Thumb = (props) => {
    
    return (
        <Link to = {`/Fiche_Logement/${props.id}`} className = 'thumb--link'>
            <div className='thumb'>
                <img src ={props.cover} alt='cover'></img>
                <h3>{props.title}</h3>
            </div>
        </Link>
    );
};

export default Thumb;