const Hero = () => {
    return (
        <div className="sans text-3xl text-green-900 mt-4 bg-green-100 overflow-hidden  p-8">
            <div className="flex justify-between items-center flex-wrap">
                <div className="mt-10 ml-10">
                    <h1 className="text-4xl font-bold">IS Technologies Ltd</h1>
                    <p className="mt-2">We are the best in electronic collection.</p>
                    <h2 className="text-4xl font-bold mt-8">Explore the Best Electronics</h2>
                    <p className="mt-3">Exclusive offer -<span className="text-red-600">10%</span> off this week</p>
                    <button className="bg-gray-500 rounded-md mt-6 hover:bg-gray-600 text-white py-3 px-6">
                        Shop Now
                    </button>
                </div>

                <div className="relative w-full md:w-auto flex items-center justify-center">
                    <div className="fixed right-4  md:right-10 z-50 top-60">
                        <a href="https://wa.me/%2B250783644486?text=Hello">
                            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
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
                    <img src="/images/Electronics.png" alt="Electronics" className="w-full  " />
                </div>
            </div>
        </div>
    );
}

export default Hero;
