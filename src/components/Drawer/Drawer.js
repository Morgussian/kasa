import React,{ useState } from 'react';
import '../styles/index.css';
import './Drawer.css';
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
            
            return (
                <ul>{content.map((item, index) => 
                    <li key={index} className = 'item'>
                        {item}
                    </li>
                )}
                </ul>
            )
        }
        return (
            <p>{content}</p>
        )
        
    } 
    console.log(isOpen)
    return isOpen ? (
        <article className='drawer'>
            <div className='drawer--header'>
                <span>{props.title}</span>
                <div className='drawer--header--arrow'>
                    <img src = {ArrowUp} alt = 'flèche haut' onClick={() => setIsOpen(0)}></img>
                </div>
            </div>
            {drawerContentDisplay()}   
        </article>
    ) : (
        <article className='drawer'>
            <div className='drawer--header'>
                <span>{props.title}</span>
                <div className='drawer--header--arrow'>
                    <img src = {ArrowDown} alt = 'flèche bas' onClick={() => setIsOpen(1)}></img>
                </div>
            </div>
        </article>
    )
}

export default Drawer

