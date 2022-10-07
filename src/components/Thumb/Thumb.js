import React from 'react';
import './Thumb.css'
import { Link } from 'react-router-dom'

//(props) c'est toutes les propriétés qu'on passe à l'appel de thumb (voir ThumbContainer)
const Thumb = (props) => {
    return (
        <Link to = {props.id}>
            <div>
                <img src ={props.cover} alt='cover'></img>
                <h3>{props.title}</h3>
            </div>
        </Link>
    );
};

export default Thumb;