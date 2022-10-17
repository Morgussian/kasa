/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique du carousel
*
* 
* @copyright 2022 Morgussian
*/
import React, {useState} from 'react';
import './Carousel.css'
import leftArrow from '../../assets/images/Vectorleft.png'
import rightArrow from '../../assets/images/Vectorright.png'

//Le carousel prend en prop un array d'URL des images
const Carousel = (props) => {

    //UseState: La première image est à l'index 0
    const [currentImg, setCurrentImg] = useState(0)
    const carouselLength = props.pictures.length;
    
    //afficher un compteur de photos
    const displayImgNumber = () => {
        let num = currentImg + 1
        return num + '/' + carouselLength;  
    }

    //Si le carousel contient plus d'une photo:
    const isMoreThanOne = () => {
        if(carouselLength > 1){
            return (
                <div className='arrows'>
                    <div className='vectorLeft'>
                        <img src = {leftArrow} alt='flèche gauche' onClick={previousImg}></img>
                    </div>
                    <div className='vectorRight'>
                        <img src = {rightArrow} alt='flèche droite' onClick={nextImg}></img>
                    </div>
                    <p>{displayImgNumber()}</p>
                </div>
            )
        }
    } 
    
    //logique de navigation dans le carousel:
    //ascendant: si l'index de l'image actuelle est le dernier du array =  changer l'index à 0, sinon +1
    const nextImg = () => {
        setCurrentImg( currentImg === carouselLength -1 ? 0 : currentImg +1 )
    }

    //descendant: si l'index de l'image actuelle est le premier du array =  changer l'index au dernier, sinon -1
    const previousImg = () => {
        setCurrentImg( currentImg === 0 ? carouselLength -1 : currentImg - 1 )
    }
    
    //si pas d'images ou tableau vide envoyé en props:
    if(!Array.isArray(props.pictures) || carouselLength === 0)
        return null
    return (
        <div className='carousel'>
            
            {props.pictures.map((picture, index) => {
                return(

                    //la class de la div change si l'image n'est pas active. Il faut une keyprop
                    <div className = {index === currentImg ? 'active' : 'inactive'} key = {index}>
                        {index === currentImg && (<img src = {picture} alt = "un appartement"></img>)}
                        
                    </div>)
            })}
            {isMoreThanOne()}
            {/* on peut mettre un array en props, pas un objet */}
        </div>
    );
};

export default Carousel;