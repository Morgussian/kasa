import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import '../../components/styles/index.css'
import './fichelogement.css'
import { useParams } from 'react-router-dom';


const FicheLogement = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <Header/>
            <h1>Fiche Logement</h1>
            <Footer/>
        </div>
    );
};

export default FicheLogement;