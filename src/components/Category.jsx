import React, { useRef, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
    {
        img: "Computers.png",
        category: "Computers",
    },
    {
        img: "SmartPhones.png",
        category: "Phones",
    },
    {
        img: "Headphones.png",
        category: "Headphones",
    },
    {
        img: "Accessories.png",
        category: "Accessories",
    },
    {
        img: "SmartWatches.png",
        category: "Watches",
    },
    {
        img: "JBL Charge 3 Waterproof.png",
        category: "Speakers",
    },
];

const NewArrival = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3, // Adjust the number of slides to show for smaller screens
                },
            },
        ],
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 4000,
    };


    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="sans p-4 pt-1 mt-32 relative bg-gray-200 md:px-[100px]">
            <div className="mt-8 relative">
                <div className="sans font-semibold md:font-bold text-xl">
                    <h2>Browse by category</h2>
                </div>
                <div className="flex  justify-end">
                    <button className="h-10 w-10 bg-white text-black font-bold hover:bg-green-500 rounded-full text-xl hover:text-white" onClick={goToPrevSlide}>&lt;</button>
                    <button className="h-10 w-10 bg-white text-black font-bold hover:bg-green-500 rounded-full text-xl hover:text-white" onClick={goToNextSlide}>&gt;</button>
                </div>
                <Slider {...settings} className="grid gric-cols" ref={sliderRef}>
                    {products.map((item) => (
                        <div key={item.id} className="custom-slide -10">
                            <CategoryCard
                                id={item.id}
                                img={item.img}
                                category={item.category}
                                title={item.title}
                                price={item.price}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default NewArrival;
