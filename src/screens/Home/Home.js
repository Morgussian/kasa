/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique d'affichage des thumbs des logements
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';

//imports des composants, feuilles de style et image de la bannière
import Banner from '../../components/Banner/Banner';
import ThumbContainer from '../../components/Thumb_container/ThumbContainer';
import './home.css'
import homeBannerImg from '../../assets/images/background.png'

const Home = () => {
    return (
        <section className='home'>
            
            <Banner img = {homeBannerImg} text = 'Chez vous, partout et ailleurs'/>
            <ThumbContainer/>
            
        </section>
    );
};

export default Home;