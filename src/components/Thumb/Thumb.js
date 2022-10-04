import React from 'react';
import './Thumb.css'

const Thumb = (id, title, imgUrl) => {
    return (
        <div className='thumb'>
            <p>{title}</p>
        </div>
    );
};

export default Thumb;