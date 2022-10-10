import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ThumbContainer from '../../components/Thumb_container/ThumbContainer';
import '../../components/styles/index.css'
import './home.css'
import homeBannerImg from '../../assets/images/background.png'

const Home = () => {
    return (
        <section className='home'>
            <Header/>
            <Banner img = {homeBannerImg} text = 'Chez vous, partout et ailleurs'/>
            <ThumbContainer/>
            <Footer/>
        </section>
    );
};

export default Home;