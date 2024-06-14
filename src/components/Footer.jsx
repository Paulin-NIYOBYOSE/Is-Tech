import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="bg-gray-800 text-gray-300 py-8 mt-4 overflow-hidden md md:p-[100px] px-[5]">
                <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold">Stay Connected</h3>
                        <p className="mt-2">Subscribe to our newsletter for updates</p>
                        <div className="mt-4 flex justify-center md:justify-start">
                            <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full md:w-auto border border-gray-600 rounded-lg " required />
                            <button type="submit" className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">Subscribe</button>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-2">
                            <li className="mb-1"><a href="#" className="hover:text-gray-400 transition-colors duration-300">Home</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-gray-400 transition-colors duration-300">Shop</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-gray-400 transition-colors duration-300">About Us</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-gray-400 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold flex justify-center items-center">Follow Us</h3>
                        <div className="mt-2 flex justify-center items-center space-x-4 ">

                            <a href="https://web.facebook.com/ishimwe.shemu">
                                <div className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center">
                                    <FaFacebookF className="text-white h-9 w-9" />
                                </div>
                            </a>
                            <a href="https://twitter.com/OfficialShemu">
                                <div className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center">
                                    <FaXTwitter className="text-white h-9 w-9" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/ishimweshemu/">
                                <div className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center">
                                    <FaInstagram className="text-white h-9 w-9" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                    <p>&copy; 2024 Is Technology. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
