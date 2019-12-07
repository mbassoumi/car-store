import React  from 'react';
import CarBox from './card/CarBox';


const car = {
    details : {
        companyName        : 'kia',
        name               : 'Sportage',
        price              : 120000,
        modelYear          : 2017,
        distance           : 63000,
        gearType           : 'automatic',
        motor              : 2000,
        power              : 125,
        seatsNumber        : 5,
        previousHandsNumber: 1,
        color              : 'gray',
    },
    pictures: [
        {
            name: 'Car 1',
            url : 'img/car 1.jpg',
        },
        {
            name: 'Car 2',
            url : 'img/car 2.jpg',
        },
        {
            name: 'Car 3',
            url : 'img/car 3.jpg',
        },
        {
            name: 'Majd',
            url : 'img/majd.png',
        },
    ]
};

const CarPage = () => {

    const renderCars = () => {

        return Array(20).fill(car).map((item, index) => {
                return (
                    <div key={index} className="p-3 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                        <CarBox car={item}/>
                    </div>
                )
            }
        );
    }

    return (
        <div className="flex flex-wrap px-4 py-12">

            {renderCars()}
            {/*<div className="p-3 lg:w-1/3 sm:w-full">*/}
            {/*    <CarBox car={car}/>*/}
            {/*</div>*/}

        </div>
    );
};

export default CarPage;
