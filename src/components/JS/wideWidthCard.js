import React from "react";
import "../CSS/wideWidthContainer.css"

function wideWidthCard(){
    const dataSchema = ["1", "2", '3', "4", "5", "6", "7", "8", "9", "10", "11", "1", "2", '3', "4", "5", "6", "7", "8", "9", "10", "11"]

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 1090;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 1090;
    }

    return(
        <div className="wideWidthCardContainer">
            <h4 className="todaysDealWideWidthContainer">Today's deals</h4>
            <div className="onlyForButtons">
            <button onClick={slideLeft} className="buttonOfWideWidthCard"><i class="fa fa-thin fa-angle-left"></i></button>
            <div className="containerForCardOfWideCardContainer">
                
                    <div className="slider" id="slider">
                        {dataSchema.map((data) => {
                            return (
                                <div className="slider-card">

                                </div>
                            )
                        })}
                    </div>
            </div>
            <button onClick={slideRight} className="buttonOfWideWidthCard"><i class="fa fa-thin fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default wideWidthCard;