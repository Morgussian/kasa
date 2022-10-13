/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique d'affichage des thumbs des logements
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';

//import du fichier contenant la data
import logements from '../../data/logements.json'
import './Thumb_container.css'
import Thumb from '../Thumb/Thumb';

const ThumbContainer = () => {
    
    //Méthode .map pour créer un tableau avec seulement les ID, title et URL du cover
    const titleList = logements.map((crib) =>

        //On a un ID, on peut s'en servir pour les keyprops
        <li key={crib.id}>
            
            {/* les props c'est ce dont Thumb va se servir */}
            <Thumb cover = {crib.cover} title = {crib.title} id = {crib.id}/>
        </li>
    )
    return (
        <div className='thumbContainer'>
            <ul>
                {titleList}
            </ul>
        </div>
    );
    
};

export default ThumbContainer;