import React, { useState } from 'react'
import sliderData from '../RawData/rawSlider';
import "../CSS/slider.css"

function Slider(){

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex != sliderData.length){
            setSlideIndex(slideIndex+1);
        }
        else{
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex-1);
        }
        else{
            setSlideIndex(sliderData.length);
        }
    }

    return(
        <div className='sliderContainer '>
            <button className='btnLeft' onClick={prevSlide}>Left</button>
            <div className='imgOfSlider'>
                
                {sliderData.map((data) => {
                return (
                    <div key={data.key} className={slideIndex === data.key ? 'slide active-anim': 'slide'}>
                        <img className='imageData' src={sliderData[slideIndex-1].url}/>
                    </div>
                )
            })}
            </div>
            <button className='btnRight' onClick={nextSlide}>Right</button>
        </div>
    )

}

export default Slider;