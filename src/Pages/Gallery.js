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
            <div class="Rec_01"></div>
            <p class="RecText_01">All</p>
            <div class="Midlimg"></div>
            <hr class="MdlHr"></hr>
            <img src={require("../Components/Filter.png")} alt="FilterImg" class="Fltrimg"></img>
            <p class="fltr">Filers</p>
            <div class="FltrBox"></div>
            <div class="FtrBg"></div>
            <img src={require("../Components/FtrImg.png")} alt="FooterImg" class="FtrImg"></img>            
        </>
    );
}

export default Gallery;