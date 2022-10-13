/**
* Ce fichier fait partie du projet Kasa.
*
* Il contient la logique du carousel
*
* 
* @copyright 2022 Morgussian
*/

import React,{ useState } from 'react';
import './Drawer.css';

//Flêches de navigation
import ArrowUp from '../../assets/images/arrow_up.png'
import ArrowDown from '../../assets/images/arrow_down.png'

//Drawer (Collapse?) prend trois props: title de la barre, content et isOpen
const Drawer = (props) => {
    const content = props.content

    //state: déclarer une constante qui est un array. une prop d'état à useState qui, suivant les pages, peut être ouvert...
    const [isOpen, setIsOpen] = useState(props.state)

    //le contenu est-il un array?
    const isAnArray = Array.isArray(content)
    
    //faire une map si content est un array
    const drawerContentDisplay = () => {
        if (isAnArray){

            //Pour le drawer qui affiche les équipements
            return (
                <ul>{content.map((item, index) => 
                    <li key={index} className = 'item'>
                        {item}
                    </li>
                )}
                </ul>
            )
        }

        //Pour le drawer qui affiche du texte
        return (
            <p>{content}</p>
        )
        
    } 
    return isOpen ? (

        //si le drawer est ouvert
        <article className='drawer'>
            <div className='drawer--header'>
                <span>{props.title}</span>
                <div className='drawer--header--arrow'>
                    <img src = {ArrowUp} alt = 'fermer' onClick={() => setIsOpen(false)}></img>
                </div>
            </div>
            {drawerContentDisplay()}   
        </article>
    ) : (

        //si le drawer est fermé
        <article className='drawer'>
            <div className='drawer--header'>
                <span>{props.title}</span>
                <div className='drawer--header--arrow'>
                    <img src = {ArrowDown} alt = 'ouvrir' onClick={() => setIsOpen(true)}></img>
                </div>
            </div>
        </article>
    )
}

export default Drawer

