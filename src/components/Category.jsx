import React, { useRef, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
    {
        id: 1,
        img: "Computers.png",
        category: "Computers",
    },
    {
        id: 2,
        img: "SmartPhones.png",
        category: "Phones",
    },
    {
        id: 3,
        img: "Headphones.png",
        category: "Headphones",
    },
    {
        id: 4,
        img: "Accessories.png",
        category: "Accessories",
    },
    {
        id: 5,
        img: "SmartWatches.png",
        category: "Watches",
    },
    {
        id: 6,
        img: "JBL Charge 3 Waterproof.png",
        category: "Speakers",
    },
];

const Category = () => {
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
                    slidesToShow: 3,
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
        <>
            <div className="sans p-4 pt-1 mt-5 relative bg-gray-200 md:px-[100px]">
                <div className="mt-8 relative">
                    <div className="sans font-semibold md:font-bold text-xl">
                        <h2>Browse by category</h2>
                    </div>
                    <div className="flex justify-end">
                        <button className="h-10 w-10 bg-white text-black font-bold hover:bg-green-500 rounded-full text-xl hover:text-white" onClick={goToPrevSlide}>&lt;</button>
                        <button className="h-10 w-10 bg-white text-black font-bold hover:bg-green-500 rounded-full text-xl hover:text-white" onClick={goToNextSlide}>&gt;</button>
                    </div>
                    <Slider {...settings} className="grid grid-cols" ref={sliderRef}>
                        {products.map((item) => (
                            <div key={item.id} className="custom-slide -10">
                                <CategoryCard
                                    id={item.id}
                                    img={item.img}
                                    category={item.category}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Category;
