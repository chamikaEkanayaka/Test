import React from "react";
import "./BodyRibbon1Styles.css";

function BodyRibbon1(){
    return(
        <>
            <div class="br1s1"></div>
            <p class="br1t1">Our event management system makes event planning easier for all of our in-person, hybrid, and virtual events.</p>
            <div class="br1b1"></div>
            <p class="br1bt1">Get Started</p>
            <img src={require("../Components/rightarrow.png")} alt="navarrowright" class="br1bt1nr"></img>
            <img src={require("../Components/pcimage.png")} alt="pcimage" class="br1i1"></img>
        </>
    )
}

export default BodyRibbon1;