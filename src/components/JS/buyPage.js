import React from "react";

function buyPage(){
    return(
        <div className="buyContainer">
            <div className="informationAboutProduct">
                <div className="leftSideForImages">

                </div>

                <div className="rightSideForInformation">
                    <h4>American Cat</h4>
                    <p>400+ bought in past month</p>
                    <hr/>
                    <h4>Rs. 688</h4>

                    <div className="">
                        <button>ADD TO CART</button>
                        <button>ADD TO WISHLIST</button>
                    </div>

                    <div className="">
                        <p>Share</p>
                        <p>WA</p>
                        <p>FB</p>
                        <p>X</p>
                        <p>Insta</p>
                    </div>

                    <div className="">
                        <h5>Delivery Details</h5>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default buyPage;