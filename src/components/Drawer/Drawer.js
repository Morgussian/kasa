
import React,{ useState } from 'react';
import '../styles/index.css';
import './Drawer.css';

//Drawer (Collapse?) prend trois props: title de la barre, content et isOpen
const Drawer = (props) => {

    //state: déclarer une constante qui est un array. une prop d'état à useState qui, suivant les pages, peut être ouvert...
    const [isOpen, setIsOpen] = useState(props.state)
    
    return isOpen ? (
        <div className='drawer'>
            <button onClick={() => setIsOpen(0)}>{props.title}</button>
            <p>
                {props.content}
            </p>
        </div>
    ) : (
        <button onClick={() => setIsOpen(1)}>{props.title}</button>
    )
};

export default Drawer;

