import React from 'react'
import Icon from './Icon'; 
import "./IconContainer.css"; 
import facebook from '../../assets/icon-facebook.svg'; 
import instagram from '../../assets/icon-instagram.svg';
import twitter from '../../assets/icon-twitter.svg';


function IconContainer() {
    return (
        <div className="IconContainer">
            <Icon src={facebook} alt={"icon facebook"}/>
            <Icon src={instagram} alt={"icon instagram"}/>
            <Icon src={twitter} alt={"icon twitter"}/>
        </div>
    )
}

export default IconContainer
