import React from "react";
import rawDataForCrads from "../RawData/rawDataForCard";
import Card from "./Card";
import "../CSS/catCard.css"

function catCard(){
    return (
        <div className="catVardContainer">
        
            {rawDataForCrads.map((data) => {
                console.log(data)
                return <Card props={data}/>
            })}
        </div>
    )
}

export default catCard;
