import React, {useState} from 'react';
import MyDropDown        from '../dropdown/MyDropDown';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <header className="bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
                <div className="flex justify-between items-center px-4 py-3 sm:p-0">
                    <div>
                        <img src="img/car 1.jpg" alt="Majd" className="w-32 h-16"/>
                    </div>
                    <div className="sm:hidden">
                        <button type="button" onClick={setIsOpen.bind(this, !isOpen)}
                                className="text-gray-500 focus:text-white hover:text-white focus:outline-none">
                            {

                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    {
                                        isOpen
                                            ?
                                            <path fill-rule="evenodd"
                                                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                                            :
                                            <path fill-rule="evenodd"
                                                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                                    }
                                </svg>
                            }

                        </button>
                    </div>
                </div>
                <div className={"px-2 pt-2 pb-4 sm:flex sm:p-0 " + (isOpen ? " block " : " hidden ")}>
                    <a href="#" className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2">All
                        Cars</a>
                    <a href="#" className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2">My
                        Car</a>
                    <a href="#"
                       className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2">fuck</a>
                    <MyDropDown className="ml-6"/>
                </div>
            </header>
        </>
    )
};


export default Navbar;