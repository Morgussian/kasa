import React from 'react';
import logements from '../../data/logements.json'


function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}

const ThumbContainer = () => {
    const cribList = json2array(logements)
    
    const titleList = cribList.map((crib) =>
        <li key={crib.id}>
            <div>
                <img src ={crib.cover} alt='cover'></img>
                <h3>{crib.title}</h3>
            </div>
        </li>
    )
    return (
        <div className='container'>
            {titleList}
        </div>
    );
    
};

export default ThumbContainer;