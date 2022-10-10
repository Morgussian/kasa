import React from 'react';
import './Banner.css'

const Banner = (props) => {
    return (
        <div className='banner'>
            <img src= {props.img} alt= 'banniere'></img>
            <h2>{props.text}</h2>
        </div>
    );
};

export default Banner;