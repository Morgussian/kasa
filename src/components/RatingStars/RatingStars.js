/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique d'affichage des étoiles du rating
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';
import './RatingStars.css'

//deux étoiles: une grise et une rouge
import EmptyStar from '../../assets/images/empty-star.png'
import FilledStar from '../../assets/images/filled-star.png'

//Rating stars récupère un nombre d'étoiles de 1 à cinq
const RatingStars = (props) => {
    
    //nombre d'étoiles à afficher
    const numberOfStars = 5;
       
    const displayStars = () => {
        let starArray = []
        
        //Iteration de 1 à 5. si I est inférieur au rating: étoile "remplie", sinon étoile "vide"
        for(let i = 1; i <= numberOfStars; i++){
            starArray.push(
                
                //Il faut une keyprop pour toute génération d'un array. dernière erreur de la console...
                <img key = {i} src= {i > props.rating ? EmptyStar  : FilledStar} alt = 'etoile' ></img>
            )          
        } 
        return starArray
    }
    return (
        
            <div className="stars">
                { displayStars() }
            </div>
        
    );
}

export default RatingStars