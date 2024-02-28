import React from "react"
import "../CSS/card.css"

function Card(props){
    return(
        <div className="cardContainer">
            <h2 className="cardTitle">{props.props.title}</h2>
            <div className="imagesOfCardContainer">
            <div className="imageOne">
                <img src={props.props.image0}/>
                <p>{props.props.subTitle0}</p>
            </div>
            <div className="imageTwo">
                <img src={props.props.image1}/>
                <p>{props.props.subTitle1}</p>
            </div>
            <div className="imageThree">
                <img src={props.props.image2}/>
                <p>{props.props.subTitle2}</p>
            </div>
            <div className="imageFour">
                <img src={props.props.image3}/>
                <p>{props.props.subTitle3}</p>
            </div>
            </div>
        </div>
    )
}

export default Card