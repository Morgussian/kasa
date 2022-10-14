/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient les infos du logement: localisation, propriétaire, tags, rating
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';
import RatingStars from '../RatingStars/RatingStars'
import Tag from '../Tag/Tag';
import './FicheLogementContents.css'

//Les props contiennent: un titre, une localisation, le nom du propriétaire, les [tags], le rating
const FicheLogementContents = (props) => {
    const tags = props.tags   
       
    return (
        <section className='crib_contents'>

            {/* Partie gauche (en desktop) */}
            <article className='left'>
                <h1>{props.title}</h1>
                <p>{props.location}</p>

                {/* Tag est un composant */}
                <Tag tags = {tags}/>
            </article>

            {/* Partie droite (en desktop) */}
            <article className='right'>
                <div className='host'>
                    <p className='hostName'>
                        {props.hostName}
                    </p>
                    <div className='hostPicture'>
                        <img src = {props.hostPicture} alt = "propriétaire"></img>
                    </div>
                </div>
                <div className='rating'>
                    <div className='starsContainer'>
                        {/* RatingStars est un composant */}
                        <RatingStars rating = {props.rating}/>
                    </div>
                </div>
            </article>
            
        </section>
    );
};

export default FicheLogementContents;