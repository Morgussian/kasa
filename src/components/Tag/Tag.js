/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique d'affichage des tags du logement
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';
import './Tag.css'

//Tag prend un array de tags en prop
const Tag = (props) => {
    return (
        <div className='tagContainer'>
            <ul className='tags'>
                {props.tags.map((tag, index) => (
                    <li key = {index} className = 'tag'> {tag} </li>
                ))}
            </ul>
        </div>
    );
};

export default Tag;
