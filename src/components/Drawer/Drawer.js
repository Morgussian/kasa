
import React,{ useState } from 'react';
import '../styles/index.css';
import './Drawer.css';

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
    return isOpen ? (
        <div className='drawer'>
            <button onClick={() => setIsOpen(0)}>{props.title}</button>
                {drawerContentDisplay()}   
        </div>
    ) : (
        <button onClick={() => setIsOpen(1)}>{props.title}</button>
    )
}

export default Drawer

