import React from 'react';
import './Banner.css'



const Banner = (props) => {
    
    return (
        <div className='banner--container'>
            <h2>{props.text}</h2>
            <div style={{background : `url(${props.img})`, 
            borderRadius: 20
            }} className = 'banner'>
            {/* <div style={[Style.banner, {backgroundImage : `url(${props.img})`}]}> */}
                {/* <img src= {props.img} alt= 'banniere'></img> */}
     
            </div>
        </div>
    );
};

export default Banner;