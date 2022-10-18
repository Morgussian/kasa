/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique d'affichage d'un logement
*
* 
* @copyright 2022 Morgussian
*/

import React from 'react';

//useParams utilise un ID envoyé par l'URL
import { useParams } from 'react-router-dom';

//imports de style
import '../../components/styles/index.css'
import './fichelogement.css'

//import de data
import logements from '../../data/logements.json'

//import de components
import Carousel from '../../components/carousel/Carousel';
import FicheLogementContents from '../../components/Fiche_Logement_Contents/FicheLogementContents';
import Drawer from '../../components/Drawer/Drawer';

//rediriger vers Err 404 si mauvais ID
import { Navigate } from 'react-router-dom'

const FicheLogement = () => {

    //destructuration: une variable entre accolades ne donne que la valeur et pas l'objet {cid}  = clé + valeur
    const {cid} = useParams()

    //trouver l'objet logement (crib) dans le fichier logements correspondant à l'id de l'URL
    const cribFind = logements.find((crib) => 
        crib.id === cid
    );
    
    //cribFind est un booléen: L'ID de l'URL est il contenu dans logements?
    if( cribFind ){

    //attendre d'avoir la constante cribFind pour le nom de la page 
    document.title = 'Kasa - ' + cribFind.title

    //Décomposer l'objet host. un objet ne peut pas être passé en prop...
    const hostName = cribFind.host.name
    const hostPicture = cribFind.host.picture
        
    return (
        <section className='fiche_logement'>
            
            <Carousel pictures= {cribFind.pictures}/>
            <FicheLogementContents title = {cribFind.title} location = {cribFind.location} hostName = {hostName} hostPicture = {hostPicture} rating = {cribFind.rating} tags = {cribFind.tags}/>

            {/* cette div permettra de gérer la disposition des drawers sur la page */}
            <div className='drawerContainer'>
                <Drawer title = 'Description' content = {cribFind.description} state = {false}/>
                <Drawer title = 'Equipement' content = {cribFind.equipments} state = {false}/>
            </div>
            
            
        </section>
    )}
    
    //si cribFind false:
    return <Navigate to = '*' />
        
    
};

export default FicheLogement;