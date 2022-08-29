import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { imgSlide } from "../utils/data";
import Style from "../styles/Slides.module.css"

export default function Slides() {
    const [imgIndex, setImgIndex] = useState(0)

    const settings = {
        adaptiveHeight: true,
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 600,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnFocus: true,
        pauseOnHover: true,
        beforeChange: (current, next) => setImgIndex(next)
    };

    return (
        <Slider {...settings}>
            {imgSlide.map((img, idx) => {
                return (
                    <div className={Style.slideColor} key={img.id}>
                        <div className={idx === imgIndex ? `${Style.slide} ${Style.activeSlide}` : Style.slide} key={img.id}>
                            <Image className={Style.imgSlide} src={img.src} alt={idx} width={440} height={220} layout="responsive" ></Image>
                        </div>
                    </div>
                )
            })}
        </Slider>
    );
}