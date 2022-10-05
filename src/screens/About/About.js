import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Large from '../../components/Drawer/Large';
import './About.css'

const About = () => {
    return (
        
        <div className = 'about'>
            <Header/>
            <Banner/>
            <div className = 'about--display'>
                <Large title = 'Fiabilité' text = {fiabilite} isOpen = 'true'/>
                <Large title = 'Respect' text = {respect} isOpen = 'true'/>
                <Large title = 'Service' text = {service} isOpen = 'true'/>
                <Large title = 'Sécurité' text = {securite} isOpen = 'true'/>
            </div>
            <Footer/>
        </div>
    );
};

export default About

const fiabilite = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
const respect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
const service = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
const securite = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
