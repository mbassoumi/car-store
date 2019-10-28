import React from 'react'
import PropTypes from 'prop-types';


const CarImage = ({picture}) => {
    return (
        <img className="absolute h-full w-full object-cover shadow-lg" src={picture.url} alt={picture.name}/>
    );
};

CarImage.prototype = {
    picture: PropTypes.exact({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired
};
export default CarImage;