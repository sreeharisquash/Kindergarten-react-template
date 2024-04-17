import React from "react";
import './GoogleMap.css'
// import LogoImg from '../../../assets/images/googlemap/images/map-overlay.svg';

const GoogleMap = () => {
    return(
        
        <div className="map-overlay">
            {/* <img src={LogoImg} alt="" className="overlay-img"/> */}
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2084528.8018600575!2d6.5763778105092525!3d46.548188913804466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2sin!4v1704276338419!5m2!1sen!2sin" width="100%" height="700" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
    }
    export default GoogleMap;