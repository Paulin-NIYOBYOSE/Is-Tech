import React, { useRef, useEffect } from "react";
import NewArrivalsCard from "./NewArrivalsCard";
import Slider from "react-slick";


const products = [
    {
        id: 9,
        img: "Macbookpro.png",
        category: "Computers",
        title: "Macbook Pro",
        price: "900000Rwf",
    },
    {
        id: 10,
        img: "Gbl1.png",
        category: "Headphones",
        title: "GBL headphones",
        price: "30000Rwf",
    },
    {
        id: 13,
        img: "Iphone13.png",
        category: "Phones",
        title: "Iphone 13",
        price: "1000000Rwf",
    },
    {
        id: 12,
        img: "Hoowel Smart Watch.png",
        category: "SmartWatches",
        title: "Hoowel Smart Watch",
        price: "50000Rwf",
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
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="container mt-32 relative md:px-[100px]">



            <div className="mt-8 relative">
                <div className="sans font-bold text-xl">
                    <h2>New Arrivals</h2>
                </div>
                <div className="flex  justify-end">
                    <button className="h-10 w-10 bg-white text-black font-bold hover:bg-green-500 rounded-full text-xl hover:text-white" onClick={goToPrevSlide}>&lt;</button>
                    <button className="h-10 w-10 bg-white text-black font-bold hover:bg-green-500 rounded-full text-xl hover:text-white" onClick={goToNextSlide}>&gt;</button>
                </div>
                <Slider {...settings} className="custom-slider" ref={sliderRef}>
                    {products.map((item) => (
                        <div key={item.id} className="custom-slide">
                            <NewArrivalsCard
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
