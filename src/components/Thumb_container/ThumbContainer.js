import React from 'react';
import logements from '../../data/logements.json'
import './Thumb_container.css'
import Thumb from '../Thumb/Thumb';

const ThumbContainer = () => {
    
    const titleList = logements.map((crib) =>
        <li key={crib.id}>
            
            {/* les props c'est ce dont Thumb va se servir */}
            <Thumb cover = {crib.cover} title = {crib.title} id = {crib.id}/>
        </li>
    )
    return (
        <div className='container'>
            <ul>
                {titleList}
            </ul>
        </div>
    );
    
};

export default ThumbContainer;