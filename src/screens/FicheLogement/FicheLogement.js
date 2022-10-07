import React from 'react';
import { useParams } from 'react-router-dom';

//imports de style
import '../../components/styles/index.css'
import './fichelogement.css'

//import de data
import logements from '../../data/logements.json'

//import de components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Carousel from '../../components/carousel/Carousel';
import FicheLogementContents from '../../components/Fiche_Logement_Contents/FicheLogementContents';
import Drawer from '../../components/Drawer/Drawer';



const FicheLogement = () => {

    //destructuration: une variable entre accolades ne donne que la valeur et pas l'objet {cid}  = clé + valeur
    const {cid} = useParams()

    //trouver l'objet logement (crib) dans le fichier logements correspondant à l'id de l'URL
    const cribFind = logements.find((crib) => 
        crib.id === cid
    );
    
        
    return (
        <div>
            <Header/>
            <h1>Fiche Logement</h1>
            <Carousel cover = {cribFind.cover} pictures= {cribFind.pictures}/>
            <FicheLogementContents title = {cribFind.title} host = {cribFind.host} location = {cribFind.location} rating = {cribFind.rating} tags = {cribFind.tags}/>
            <Drawer title = 'Description' content = {cribFind.description} state = '0'/>
            <Drawer title = 'Equipement' content = {cribFind.equipments} state = '0'/>
            <Footer/>
        </div>
    );
};

export default FicheLogement;