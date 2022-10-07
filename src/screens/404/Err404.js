import React from 'react';
import '../../components/styles/index.css';
import './404.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Err404 = () => {
    return (
        <div>
            <Header/>
            <section className='Err404'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas</p>
                <Link to = '/'>Retour à la page d'accueil</Link>
            </section>
            <Footer/>
        </div>
    );
};

export default Err404;