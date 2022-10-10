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
import Err404 from '../404/Err404';


const FicheLogement = () => {

    //destructuration: une variable entre accolades ne donne que la valeur et pas l'objet {cid}  = clé + valeur
    const {cid} = useParams()

    //trouver l'objet logement (crib) dans le fichier logements correspondant à l'id de l'URL
    const cribFind = logements.find((crib) => 
        crib.id === cid
    );

    if( cribFind ){

    //Décomposer l'objet host. Apparemment un objet ne peut pas être passé en prop...
    const hostName = cribFind.host.name
    const hostPicture = cribFind.host.picture
        
    return (
        <section className='fiche_logement'>
            <Header/>
            <Carousel pictures= {cribFind.pictures}/>
            <FicheLogementContents title = {cribFind.title} location = {cribFind.location} hostName = {hostName} hostPicture = {hostPicture} rating = {cribFind.rating} tags = {cribFind.tags}/>
            <div className='drawerContainer'>
                <Drawer title = 'Description' content = {cribFind.description} state = '0'/>
                <Drawer title = 'Equipement' content = {cribFind.equipments} state = '0'/>
            </div>
            
            <Footer/>
        </section>
    )}
    
    //si cribFind undefined:
    return <Err404/>;
    
};

export default FicheLogement;