import React      from 'react';
import Navbar     from './components/navbar/Navbar';
import MyDropDown from './components/dropdown/MyDropDown';
import CarPage    from './components/car/CarPage';

function App() {


    return (
        <div>
            {/*<div className="bg-gray-800 h-screen p-10">*/}
            {/*    <MyDropDown/>*/}
            {/*</div>*/}
            <Navbar/>
            <CarPage/>
        </div>
    );
}

export default App;
