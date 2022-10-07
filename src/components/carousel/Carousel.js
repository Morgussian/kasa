import React from 'react';

const Carousel = (props) => {
    return (
        <div>
            <h1>Photos</h1>
            <img src = {props.cover} alt = "un appartement"></img>

            {/* on peut mettre un array en props */}
            {console.log(props.pictures)}
        </div>
    );
};

export default Carousel;