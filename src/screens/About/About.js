import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import './About.css'
import Drawer from '../../components/Drawer/Drawer';
import aboutBannerImg from '../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash2.png'

const fiabilite = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
const respect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
const service = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
const securite = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'

const About = () => {
    return (
        
        <section className = 'about'>
            <Header/>
            <Banner img = {aboutBannerImg} />
            <div className = 'about--display'>
                <Drawer title = 'Fiabilité' content = {fiabilite} state = {false}/>
                <Drawer title = 'Respect' content = {respect} state = {false}/>
                <Drawer title = 'Service' content = {service} state = {false}/>
                <Drawer title = 'Sécurité' content = {securite} state = {false}/>
            </div>
            <Footer/>
        </section>
    );
};

export default About

