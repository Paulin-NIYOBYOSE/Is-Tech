import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import IsLogo from '/images/IsLogo.png';
import Navmenu from './Navmenu';
import { useAppSelector } from '../redux/hooks';
import Modal from 'react-modal';
import { IoCloseCircle } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { TbPasswordUser } from "react-icons/tb";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { products } from './TrendingProducts';
Modal.setAppElement('#root')

const Navbar = ({ setShowCart }) => {

    const cartCount = useAppSelector((state) => state.cartReducer.length);
    const handleCartClick = () => {
        setShowCart(true);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the state between true and false
    };
    const [showMenu, setShowMenu] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false)

    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // const dataArray = ['apple', 'banana', 'orange', 'pear', 'grape', "paulin", "only", "oooo", "ooooo", "oooooo"];

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        if (term === '') {
            setSearchResults([]);
        } else {
            const results = dataArray.filter(item =>
                item.toLowerCase().includes(term.toLowerCase())
            );
            setSearchResults(results);
        }
    };

    const handleAutocompleteClick = (term) => {
        setSearchTerm(term);
        setSearchResults([]);
    };
    return (
        <div className="bg-white h-[100px] sticky sans md:px-[50px] pt-2 overflow-hidden px-[10px]  ">
            <div className="">
                <div className="flex sm:gap-16 items-center">
                    <a href="">
                        <div className="md:h-20 md:w-24 sm:h-16 md:sm-w-20 h-10 w-16">
                            <img style={{ height: '100%', width: '100%' }} className='' src={IsLogo} alt="" />
                            {/* <Modal /> */}
                        </div>
                    </a>
                    <ul className="hidden md:flex gap-3 mt-7">
                        <li className='mb-4 pb-2 font-bold text-green-700 cursor-pointer'>Home</li>
                        <li className='mb-4 pb-2  font-semibold hover:text-green-700  cursor-pointer'>About</li>
                        <li className='mb-4 pb-2 font-semibold hover:text-green-700 duration-700 cursor-pointer'>Contacts</li>
                    </ul>
                    <div className="lg:flex hidden max-w-[500px]">
                        <div >
                            <input
                                className="border-2 border-gray-500 px-6 py-2 w-full rounded-l-lg focus:outline-none"
                                type="text"
                                placeholder="Search for products..."
                                value={searchTerm}
                                onChange={handleChange}
                            />
                            <div className='absolute  w-48 h-52  z-20'>
                                {searchTerm !== '' ? (
                                    <ul>
                                        {searchResults.map((item, index) => (
                                            <li key={index} onClick={() => handleAutocompleteClick(item)}>
                                                {item}
                                            </li>
                                        ))}
                                        {searchResults.length === 0 && <p>No data found</p>}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                        {/* <input
                            className="border-2 border-gray-500 px-6 py-2 w-full rounded-l-lg"
                            type="text"
                            placeholder="Search for products..."
                        /> */}
                        <div className="bg-gray-500 text-white text-[26px] grid place-items-center px-4 rounded-r-lg">
                            <CiSearch />
                        </div>
                    </div>
                    <div className="flex absolute gap-5 mr-10 right-0 sm:gap-4 md:gap-8 items">
                        <div className="md:flex gap-3 hidden cursor-pointer "
                            onClick={openModal}
                        >
                            <Modal
                                shouldCloseOnEsc
                                isOpen={modalIsOpen}
                                // onRequestClose={closeModal}
                                style={{
                                    content: {
                                        backgroundColor: "#fff",
                                        width: 400,
                                        height: 400,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }, overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" }
                                }}
                            >
                                <div>
                                    <IoCloseCircle onClick={closeModal} className="ml-80 cursor-pointer" />
                                    <form action="">
                                        <h3 className='flex items-center justify-center font-semibold text-lg mb-2'>
                                            Log in to IS tech
                                        </h3>
                                        <div className="flex items-center justify-center pl-2 border-[1.5px]  h-10 w-full rounded-lg">
                                            <AiOutlineUser className="h-5 w-5" />
                                            <input
                                                type="text"
                                                className="h-full w-full focus:outline-none pl-2"
                                                placeholder="Full Name"
                                                required
                                            />
                                        </div>
                                        <div className="flex mt-3 items-center justify-center pl-2 border-[1.5px] h-10 w-full rounded-lg pr-2">
                                            <TbPasswordUser className="h-5 w-5" />{" "}
                                            {/* Assuming this is your custom password icon */}
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="h-full w-full focus:outline-none pl-2"
                                                placeholder="Password"
                                                required
                                            />
                                            <button
                                                onClick={togglePasswordVisibility}
                                                className="focus:outline-none"
                                            >
                                                {showPassword ? <IoEyeOff /> : <IoEye />}{" "}
                                                {/* Toggle button with eye icons */}
                                            </button>
                                        </div>
                                        <div className='flex items-center justify-center mt-2'> <input type="submit" className='border-none rounded-lg  text-white h-10 w-32 bg-black' value={"Log in"} /></div>
                                        <div class="border-2  border-gray-200 rounded-lg h-10 w-100 mt-2 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                                class="h-5 w-5 mr-10" viewBox="0 0 48 48">
                                                <path fill="#FFC107"
                                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                                                </path>
                                                <path fill="#FF3D00"
                                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                                                </path>
                                                <path fill="#4CAF50"
                                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                                                </path>
                                                <path fill="#1976D2"
                                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                                                </path>
                                            </svg>
                                            Sign
                                            in with google
                                        </div>
                                        <h3 className='ml-20'>Don't have an account?<a href="" className='text-blue-500'>Signup</a></h3>
                                    </form>
                                </div>
                            </Modal>

                            <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                                <CiUser />
                            </div>
                            <div>
                                <p className="text-gray-500">Hello, Sign in</p>
                                <p className="font-medium">Your account</p>
                            </div>
                        </div>
                        <div className="md:hidden font-medium">
                            <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[25px] w-[35px] h-[30px] flex items-center justify-center"
                                onClick={openModal}>
                                <CiUser />
                            </div>
                        </div>

                        <div className="text-gray-500 text-[32px] relative cursor-pointer" onClick={handleCartClick}>
                            <FaShoppingCart />
                            <div className="absolute top-0 right-[1px] ml-10 bg-red-500 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">
                                {cartCount}
                            </div>
                        </div>
                        {showMenu && <Navmenu />}
                        <button onClick={toggleMenu} className="text-black focus:outline-none lg:hidden">
                            <IoMdMenu className="h-10 w-10" />
                        </button>

                    </div>
                </div>
                <div className="sm:hidden flex ">
                    <input
                        className="border-[1px] pl-5 border-gray-500 h-10 w-full rounded-l-lg"
                        type="text"
                        placeholder="Search for products..."
                    />
                    <div className="bg-gray-500 text-white w-10  grid place-items-center rounded-r-lg">
                        <CiSearch />
                    </div>
                </div>
                <div className="border-b border-gray-200 pt-4"></div>
            </div>
        </div>
    );
};

export default Navbar;
