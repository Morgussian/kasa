/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique d'affichage de la page à propos
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';

//import des composants et de la feuille de style
import Banner from '../../components/Banner/Banner';
import './About.css'
import Drawer from '../../components/Drawer/Drawer';
import aboutBannerImg from '../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash2.png'

//fichier data contenant les titres et contenus des drawers à afficher
import AboutFacts from '../../data/about_facts.json'

const About = () => {
    document.title = 'Kasa - A propos'
    let screenTitle = document.head.getElementsByTagName('title');
    screenTitle.innerText = 'A propos'
    //les drawers sont mappés, affichés fermés par défaut (state false)
    const AboutDrawerList = AboutFacts.map((fact) => 
        <li key={fact.title}>
            <Drawer title = {fact.title} content = {fact.content} state = {false}/>
        </li>  
    )
    return (
        <section className = 'about'>
            <Banner img = {aboutBannerImg} />
            <ul className = 'about--display'>
                {AboutDrawerList}
            </ul>
        </section>
    );
};

export default About

