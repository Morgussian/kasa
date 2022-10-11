import React, { useState } from 'react';
import Star from '../Star/Star';

const RatingStars = (props) => {
    const [gradeIndex, setGradeIndex] = useState(props.rating);
    const GRADES = [1, 2, 3, 4, 5];
    const activeStar = {
        fill: 'var(--primary-color)'
    };
    
    
    const changeGradeIndex = () => {
        setGradeIndex( props.rating );
    }
    console.log(props.rating)
    return (
        <div className="container">
            <h1 className="result">{ GRADES[gradeIndex] ? GRADES[gradeIndex] : 'You didn\'t review yet'}</h1>
            <div className="stars">
                {
                    GRADES.map((grade, index) => (
                        
                        <Star 
                            index={index} 
                            key={grade} 
                            changeGradeIndex={changeGradeIndex}
                            style={ gradeIndex > index ? activeStar : {}}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default RatingStars