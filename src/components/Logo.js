import React from 'react'
import "./Logo.css"; 
import logo from '../assets/logo.svg'; 

function Logo(props) {
    return (
        <div className="logoContainer">
            <img id={props.id} src={logo} alt="logo Equalize" className="Logo" />
        </div>
    )
}

export default Logo
