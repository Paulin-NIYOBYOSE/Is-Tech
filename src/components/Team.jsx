import React, { useRef, useEffect } from "react";
import TeamCard from "./TeamCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
    {
        img: "Shemuceo.png",
        name: "Eng.Shemu Ishimwe",
        role: "CEO of IS Techology",
    },
    {
        img: "Paulin.png",
        name: "NIYOBYOSE Paulin",
        role: "Brand Ambassador",
    },
    {
        img: "Shemuceo.png",
        name: "Eng.Shemu Ishimwe",
        role: "CEO of IS Techology",
    },
    {
        img: "Paulin.png",
        name: "NIYOBYOSE Paulin",
        role: "Brand Ambassador",
    },

];

const Team = () => {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
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
            <div className="sans p-4 pt-1  relative bg-gray-200 md:h-[500px] overflow-hidden">
                <div className=" h-full">
                    <div className="sans font-semibold md:font-bold text-2xl flex items-center justify-center">
                        <h2>Meet Our team</h2>
                    </div>
                    <div className="flex  justify-end">
                        <button className="h-10 w-10 bg-white text-black font-bold hover:bg-green-500 rounded-full text-xl hover:text-white" onClick={goToPrevSlide}>&lt;</button>
                        <button className="h-10 w-10 bg-white text-black font-bold hover:bg-green-500 rounded-full text-xl hover:text-white" onClick={goToNextSlide}>&gt;</button>
                    </div>
                    <Slider {...settings} className="custom-slider" ref={sliderRef}>
                        {team.map((item) => (
                            <div key={item.id} className="custom-slide -10  sm:px-10 px-[5px]">
                                <TeamCard
                                    img={item.img}
                                    name={item.name}
                                    role={item.role}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Team;
