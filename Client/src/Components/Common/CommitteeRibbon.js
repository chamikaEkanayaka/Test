import React from "react";
import "../Common/CommitteeRibbonStyles.css"

function CommitteeRibbon(){
    return(
        <>
        <nav>
            <div>
                <ul id="NavBarEl">
                    <li><a href="index.html">EveM</a></li>
                    <li>YOU ARE COMMITTEE USER</li>
                    <li><img src={require("../../Images/BellIcon.png")} alt="bellicon" width={25}/></li>
                    <li><img src={require("../../Images/defaultprofilepicture.png")} alt="defaultpp" width={30}/></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default CommitteeRibbon;