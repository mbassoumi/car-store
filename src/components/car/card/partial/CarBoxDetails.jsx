import React from 'react'
import PropTypes from 'prop-types';


const CarBoxDetails = ({carDetails}) => {
    return (
        <div>
            <h1 className="uppercase leading-loose font-semibold truncate">
                {carDetails.companyName} {carDetails.name}
            </h1>
            <h2 className="font-semibold truncate">{carDetails.price} <span className="text-sm text-gray-500">nis</span></h2>
            <h3 className="text-gray-800 truncate">{carDetails.distance} <span className="text-sm text-gray-500">km</span></h3>
            <h3 className="text-gray-800 truncate">{carDetails.gearType}</h3>
            {/*<h1>{carDetails.motor}</h1>*/}
            {/*<h1>{carDetails.power}</h1>*/}
            {/*<h1>{carDetails.seatsNumber}</h1>*/}
            {/*<h1>{carDetails.previousHandsNumber}</h1>*/}
            {/*<h1>{carDetails.color}</h1>*/}
        </div>
    );
};


CarBoxDetails.propTypes = {
    carDetails: PropTypes.exact({
        companyName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        modelYear: PropTypes.number.isRequired,
        distance: PropTypes.number.isRequired,
        gearType: PropTypes.string.isRequired,
        motor: PropTypes.number.isRequired,
        power: PropTypes.number.isRequired,
        seatsNumber: PropTypes.number.isRequired,
        previousHandsNumber: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired
};
export default CarBoxDetails;