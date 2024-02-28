import React from 'react'
import "../CSS/mdmCard.css"
import Card from './Card';
import primeVideo from '../RawData/rawDataForPrimeVideo';

function mdmCard(props){
    return (
        <div className='mdmCardContainer'>
            <div className='primeVideContainer'>
                <h2 className='primeVideoTitle1'>Cat Video: Recommended for you</h2>
                <h5 className='primeVideoTitle2'>{props.title}</h5>
                <img className='primeVideoIMG' src={props.imgUrl}/>
                <p  className='primeVideoTitle3'>Start watching on Cat Video</p>
            </div>
            <div className='smallcardContainer'>
            <div className='smallcard'>
                <Card className="smallcard" props={primeVideo[primeVideo.length-1]}/>
            </div>
            <div className='smallcard'>
                <Card props={primeVideo[primeVideo.length-1]}/>
            </div>
            </div>
        </div>
    )
}

export default mdmCard;