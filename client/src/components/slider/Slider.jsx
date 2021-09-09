import React, { useState, useEffect } from "react";
import {dataSlider} from './dataSlider';

import '../../styles/components/Slider.css';

const FiveSec = 5000;


export default function Slider() {
    
    const [slideIndex, setSlideIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, FiveSec);

        return () => clearInterval(interval);
    }, [slideIndex])

    const nextSlide = () => {
        if(slideIndex <= dataSlider.length -2){
            
            setSlideIndex(slideIndex+1);
        }else{
            setSlideIndex(0);
        }
    }


    return(
        <>
            <div className = "container-slider">
                        <div
                        key = {dataSlider[slideIndex].id}
                        className = {slideIndex === dataSlider[slideIndex].id -1 ? "slide active-anim": "slide"} >
                            <img
                                src = {dataSlider[slideIndex].img}
                            />
                        </div>

            </div>
        </>
    )
}