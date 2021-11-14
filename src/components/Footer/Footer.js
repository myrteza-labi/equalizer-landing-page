import React from 'react'
import './Footer.css'; 
import Logo from '../Logo'; 
import Copyright from './Copyright'; 
import IconContainer from './IconContainer'; 

function Footer() {
    return (
        <footer className="Footer">
            <div className="logoAndCopyright">
                <Logo/>
                <Copyright/>
            </div>
            
            <IconContainer/>
        </footer>
    )
}

export default Footer
