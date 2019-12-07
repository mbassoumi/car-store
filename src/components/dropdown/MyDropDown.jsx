import React, {useState, useEffect} from 'react';

const MyDropDown = ({className}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleEscape = (e) => {
        console.log(e)
        if (e.key === 'Esc' || e.key === 'Escape'){
            setIsOpen(false);
        }
    };

    useEffect(() => {
        console.log('sd');
        document.addEventListener('keydowdn', handleEscape);
        return document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <div className={className + " relative"}>

            <button
                onClick={setIsOpen.bind(this, !isOpen)}
                className="relative  z-10 block h-10 w-10 rounded-full overflow-hidden focus:outline-none border-2 border-gray-600 focus:border-blue-400">
                <img className="h-full w-full object-cover"
                     src="https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-8/27983503_2062718237331521_354627567952728998_o.jpg?_nc_cat=104&_nc_ohc=n_kNhC4SWCgAQn8iYS3Xgbbf3pnJkl5dsbW1OUFzRAAnwMiXCeRVGT-hw&_nc_ht=scontent.fjrs4-1.fna&oh=93373f844cb537d033b97394f437dbca&oe=5E819ACF"
                     alt="A7a"/>
            </button>

            {
                isOpen &&
                (
                    <>
                        <button onClick={setIsOpen.bind(this, false)}
                                tabIndex={-1}
                                className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></button>
                        <div className="absolute right-0 bg-white  rounded-lg py-2 w-48 mt-2 shadow-xl">
                            <a href="#"
                               className="block px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Settings</a>
                            <a href="#" className="block px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">sign
                                out</a>
                        </div>
                    </>
                )
            }
        </div>
    )
};

export default MyDropDown;