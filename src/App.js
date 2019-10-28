import React from 'react';
import logo from './logo.svg';
import CarBox from "./components/car/CarBox";

function App() {
    return (
        <div className="flex flex-wrap px-4 py-12">
            <div className="p-3 w-1/3 ">
                <CarBox/>
            </div>

            <div className="p-3 w-1/3 ">
                <CarBox/>
            </div>

            <div className="p-3 w-1/3 ">
                <CarBox/>
            </div>

            <div className="p-3 w-1/3 ">
                <CarBox/>
            </div>   <div className="p-3 w-1/3 ">
                <CarBox/>
            </div>

            <div className="p-3 w-1/3 ">
                <CarBox/>
            </div>

            <div className="p-3 w-1/3 ">
                <CarBox/>
            </div>

            <div className="p-3 w-1/3 ">
                <CarBox/>
            </div>



            {/*<div className=" mx-4 w-1/3">*/}
            {/*    <CarBox/>*/}
            {/*</div>*/}
            {/*<div className="mx-4 w-1/3">*/}
            {/*    <CarBox/>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;
