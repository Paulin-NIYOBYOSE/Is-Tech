import React from "react";
const Hero = () => {
    return (
        <div className="text-3xl text-green-900 w-full bg-green-100 overflow-hidden ml-0 relative md:p-8">
            <div className="flex flex-row justify-between items-center flex-wrap">
                <div className="flex flex-row">
                    <div className="mt-10 md:mt-14 w-1/2 md:ml-10 ml-5 ">
                        <h1 className="md:text-3xl text-2xl font-bold">IS Technologies Ltd</h1>
                        <p className="mt-2">We are the best electronic collection.</p>
                        <h2 className="md:text-3xl text-2xl font-bold mt-8">Explore the Best Electronics</h2>
                        <p className="mt-3">Exclusive offer -<span className="text-red-600">10%</span> off this week</p>
                        <button className="bg-gray-500 rounded-md mt-6 h-10 w-24 hover:bg-gray-600 text-sm text-white">
                            Shop Now
                        </button>
                    </div>
                    <img src="/images/Electronics.png" alt="Electronics" className="hidden md:block w-1/2 pt-10" />
                </div>

                <div className="relative w-full md:w-auto flex items-center justify-center">

                    <div className=" rounded-full ">
                        <a className="fixed right-0 md:right-10 z-50 top-60" href="https://wa.me/%2B250783644486?text=Hello">
                            <div className="bg-green-500 rounded-full w-12 h-12 mr-5 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-label="WhatsApp"
                                    role="img"
                                    viewBox="0 0 512 512"
                                    className="text-white w-full h-full"
                                >
                                    <rect
                                        width="512"
                                        height="512"
                                        rx="15%"
                                        fill="#25d366"
                                    />
                                    <path
                                        fill="#25d366"
                                        stroke="#ffffff"
                                        strokeWidth="26"
                                        d="M123 393l14-65a138 138 0 1150 47z"
                                    />
                                    <path
                                        fill="#ffffff"
                                        d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                                    />
                                </svg>
                            </div>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;
