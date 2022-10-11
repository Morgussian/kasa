import React from 'react';
import './Tag.css'

const Tag = (props) => {
    return (
        <div className='tagContainer'>
            <ul className='tags'>
                {props.tags.map((tag, index) => (
                    <li key={index} className = 'tag'> {tag} </li>
                ))}
            </ul>
        </div>
    );
};

export default Tag;
