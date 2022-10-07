import React from 'react';

const FicheLogementContents = (props) => {
    console.log(props.host)
    //let tags = props.tags
    return (
        <div className='crib_contents'>
            <div className='left'>
                <h1>{props.title}</h1>
                <p>{props.location}</p>
                <ul className='tags'>
                {/* {tags.forEach(tag) 
                    (<li>{tag}</li>)
                } */}
                
                </ul>

            </div>
            <div className='right'>
                <p className='host'>
                    {props.host}
                </p>
                <div className='ranking'>

                </div>
            </div>
            
        </div>
    );
};

export default FicheLogementContents;