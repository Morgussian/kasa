import React from 'react';
import logements from '../../data/logements.json'
import Thumb from '../Thumb/Thumb';


const ThumbContainer = () => {
    const cribList = JSON.stringify(logements)
    
    const titleList = cribList.map((crib) =>
        <li key={crib.id}>
            <div>
                <img src ={crib.cover} alt='cover'></img>
                <h3>{crib.title}</h3>
            </div>
        </li>
    )
    return (
        <div className='container'>
            {titleList}
            <Thumb/>
        </div>
    );
    
};

export default ThumbContainer;