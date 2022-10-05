
import React,{ useState } from 'react';
import './Drawer.css';

const Large = (props) => {

    //state: déclarer une constante qui est un array. Pas d'état à useState qui, suivant les pages, peut être ouvert...
    const [isOpen, setIsOpen] = useState()
    return isOpen ? (
        <div className='drawer'>
            <button onClick={() => setIsOpen(false)}>{props.title}</button>
            <p>
                {props.text}texte
            </p>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>{props.title}</button>
    )
};

export default Large;

