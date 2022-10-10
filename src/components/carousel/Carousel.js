import React, {useState} from 'react';
import './Carousel.css'
import leftArrow from '../../assets/images/Vectorleft.png'
import rightArrow from '../../assets/images/Vectorright.png'


const Carousel = (props) => {
    const [currentImg, setCurrentImg] = useState(0)
    const carouselLength = props.pictures.length;

    const nextImg = () => {
        setCurrentImg( currentImg === carouselLength -1 ? 0 : currentImg +1 )
    }
    const previousImg = () => {
        setCurrentImg( currentImg === 0 ? carouselLength -1 : currentImg - 1 )
    }
    console.log(currentImg)
    //si pas d'images ou tableau vide envoyé en props:
    if(!Array.isArray(props.pictures) || carouselLength === 0)
        return null
    return (
        
        <section className='carousel'>
            <div className='arrows'>
                <div className='vectorLeft'>
                    <img src = {leftArrow} alt='flèche gauche' onClick={nextImg}></img>
                </div>
                <div className='vectorRight'>
                    <img src = {rightArrow} alt='flèche droite' onClick={previousImg}></img>
                </div>
            </div>
            {props.pictures.map((picture, index) => {
                return(
                <div className = {index === currentImg ? 'active' : 'inactive'} key = {index}>
                    {index === currentImg && (<img src = {picture} alt = "un appartement">
                    
                    </img>)}
                    
                    
                </div>)
            })}
            {/* on peut mettre un array en props */}
            
        </section>
    );
};

export default Carousel;