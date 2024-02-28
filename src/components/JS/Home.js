import React from "react";
import CatCard from "./catCard";
import "../CSS/home.css"
import MdmCard from "./mdmCard";
import WideWidthCard from "./wideWidthCard";
import PreFooter from "./preFooter";

function Home() {
    return(
        <div className="homeContainer">
            <CatCard/>
            <MdmCard />
            <WideWidthCard/>
            <WideWidthCard/>
            <WideWidthCard/>  
            <PreFooter/>
        </div>
    )
}   

export default Home;