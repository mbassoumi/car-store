import React from 'react'
import CarDetails from "./partial/CarDetails";
import ImageCarousel from "./partial/ImageCarousel";
import PropTypes from 'prop-types'

const CarBox = ({car}) => {
    return (

        <div className="overflow-hidden">
            <div className="relative px-6 -mb-4 z-10">
                <span className="inline-block rounded-full p-2 right-0 text-white font-bold bg-yellow-600">
                    {car.details.modelYear}
                </span>
            </div>
            <div className="relative rounded-lg overflow-hidden">
                <ImageCarousel pictures={car.pictures}/>
            </div>

            <div className="relative px-6 -mt-12">
                <div className="relative p-6 rounded-lg bg-white shadow-xl">
                    <CarDetails carDetails={car.details}/>
                    <a href="#" className="inline-block absolute mr-3 mb-3 bg-blue-500 text-white text-sm rounded-lg px-2 py-1 right-0 bottom-0 uppercase shadow-lg hover:border-blue-500 focus:outline-none focus:shadow-outline hover:bg-black active:bg-gray-700">full details</a>
                </div>
            </div>
        </div>

    );
};

CarBox.prototype = {
    car: PropTypes.exact({
        details: PropTypes.exact({
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
        }).isRequired,
        pictures: PropTypes.arrayOf(PropTypes.exact({
            name: PropTypes.string,
            url: PropTypes.string
        })).isRequired
    })
};

export default CarBox;