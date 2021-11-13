import React from 'react'
import "./Logo.css"; 
import logo from '../assets/logo.svg'; 

function Logo() {
    return (
        <div className="logoContainer">
            <img src={logo} alt="logo Equalize" className="Logo" />
        </div>
    )
}

export default Logo
