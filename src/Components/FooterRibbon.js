import React from "react";
import "../Components/FooterRibbonStyles.css";

function FooterRibbon(){
    return(
        <>
            <div class="frb">
                <div class="frbi">
                    <p class="frbih">EveM</p>
                    <p class="frbid">This event management software helps<br/> us keep track of all of our event's<br/> moving parts to help our event run<br/> more smoothly</p>
                </div>
                <div class="frbi">
                    <p class="frbih">Keep In Touch</p>
                    <p class="frbid">Subscribe to receive new updates,<br/> be the know about our events, and<br/> more.</p>
                </div>
                <div class="frbi">
                    <img src={require("../Components/ifsevemlogo.png")} alt="ifsevemlogo"></img>
                </div>
            </div>
            <div class="frb2">
                <img src={require("../Components/socialmediaiconsimg.png")} alt="socialmediaiconsimg" class="frb2smii"></img>
                <p class="frb2c">© 2023, EveM. Powered by Matrix</p>
                <img src={require("../Components/paymentmethodsiconsimg.png")} alt="paymentmethodsiconsimg" class="frb2pmii"></img>
            </div>
        </>
    );
}
export default FooterRibbon;