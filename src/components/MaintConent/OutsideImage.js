import React from 'react'
import "./OutsideImage.css"; 
import mobile from '../../assets/illustration-app.png'; 
function OutsideImage() {
    return (
        <img src={mobile} alt="smartphone" className="OutsideImage" />
    )
}

export default OutsideImage
