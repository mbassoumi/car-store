import React from 'react'
import CarImage from "./partial/CarImage";
import CarDetails from "./partial/CarDetails";

const carPicture = {
    name: 'Car 1',
    url: 'img/car 1.jpg',
};

const carDetails = {
    companyName: "kia",
    name: "Sportage",
    price: 120000,
    modelYear: 2017,
    distance: 63000,
    gearType: 'automatic',
    motor: 2000,
    power: 125,
    seatsNumber: 5,
    previousHandsNumber: 1,
    color: 'gray',
};

const CarBox = () => {
    return (


        <div className="overflow-hidden">
            <div className="relative px-6 -mb-4 z-10">
                <span className="inline-block rounded-full p-2 right-0 text-white font-bold bg-yellow-600">
                    {carDetails.modelYear}
                </span>
            </div>
            <div className="relative rounded-lg overflow-hidden pb-5/6">
                {/*<img className="absolute h-full w-full object-cover" src={picture.url} alt={picture.name}/>*/}
                <CarImage picture={carPicture}/>
            </div>

            <div className="relative px-6 -mt-12">
                <div className="p-6 rounded-lg bg-white shadow-xl">
                    <CarDetails carDetails={carDetails}/>
                </div>
            </div>
        </div>

    );
};

export default CarBox;