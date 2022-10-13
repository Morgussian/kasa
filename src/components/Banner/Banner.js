
import React from 'react';
import './Banner.css'



const Banner = (props) => {
    
    return (
        <div className='banner--container'>
            <h1>{props.text}</h1>
            <div style={{background : `url(${props.img})`, 
            borderRadius: 20
            }} className = 'banner--img'>
            {/* <div style={[Style.banner, {backgroundImage : `url(${props.img})`}]}> */}
                {/* <img src= {props.img} alt= 'banniere'></img> */}
     
            </div>
        </div>
    );
};

export default Banner;