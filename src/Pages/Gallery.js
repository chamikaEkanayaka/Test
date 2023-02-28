import React from "react";
import "./GalleryStyles.css";
import NavBar from "../Components/NavBar";

function Gallery(){
    return(
        <>
            <NavBar/>
            <img src={require("../Components/GlryCovr.jpg")} alt="GalleryCover" class="GlryCvr"></img>
            <div class="CvrClrMx"></div>
            <p class="WebNme">EveM</p>
            <p class="ScndP">Event Management</p>
            <button class="btn Rec_01">All</button>
            <button class="btn Rec_02">Trip</button>
            <button class="btn Rec_03">Charity</button>
            <button class="btn Rec_04">Sports</button>
            <button class="btn Rec_05">Festival</button>
            <button class="btn Rec_06">Other</button>
            <div class="Midlimg"></div>
            <hr class="MdlHr"></hr>
            <img src={require("../Components/Filter.png")} alt="FilterImage" class="Filter"></img>
            <p class="fltr">Filers</p>
            <div class="FltrBox"></div>
            <div class="FtrBg"></div>
                       
        </>
    );
}

export default Gallery;