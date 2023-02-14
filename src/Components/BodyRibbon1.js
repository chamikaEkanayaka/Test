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
            <div class="br1el"></div>
            <div class="evAwr">
                <div class="evAwrb1"></div>
                <div class="evAwrb2"><p class="evAwt">Events for employees<br/> Boost morale, reduce<br/> stress, and promote<br/> professional growth</p></div>
                <div class="evAwri"></div>
            </div>
        </>
    )
}

export default BodyRibbon1;