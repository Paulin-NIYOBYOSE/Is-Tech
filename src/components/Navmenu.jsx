import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

const Navmenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`bg-gray-800 text-white w-64 py-4 px-6 fixed left-0 top-0 bottom-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`}>
                <div className="flex justify-end mb-4">
                    <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
                        <RxCross1 className="h-6 w-6" />
                    </button>
                </div>
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="block py-2 px-4 bg-gray-700 rounded">Home</a>
                    </li>
                    <li>
                        <a href="" className="block py-2 px-4 hover:bg-gray-700 rounded">Shop</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">About Us</a>
                    </li>
                    <li>
                        <a href="#hidden" className="block py-2 px-4 hover:bg-gray-700 rounded">Contact</a>
                    </li>

                </ul>
            </div>
        </>
    );
};

export default Navmenu;