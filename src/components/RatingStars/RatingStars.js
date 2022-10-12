import React from 'react';
import EmptyStar from '../../assets/images/empty-star.png'
import FilledStar from '../../assets/images/filled-star.png'

const RatingStars = (props) => {
    
    const numberOfStars = 5;
   
    
    
   
    const displayStars = () => {
        let starArray = []
        for(let i = 1; i <= numberOfStars; i++){
            starArray.push(
                <img src= {i > props.rating ? EmptyStar : FilledStar} alt = 'etoile' ></img>
                
            )          
        } 
        return starArray
    }
    return (
        <div className="container">
            {/* <h1 className="result">{ GRADES[gradeIndex] ? GRADES[gradeIndex] : 'You didn\'t review yet'}</h1> */}
            <div className="stars">
                {
                    
                      
                displayStars()        
                    
                }
            </div>
        </div>
    );
}

export default RatingStars