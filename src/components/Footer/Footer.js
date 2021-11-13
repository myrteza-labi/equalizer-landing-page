import React from 'react'
import Logo from '../Logo'; 
import Copyright from './Copyright'; 
import IconContainer from './IconContainer'; 

function Footer() {
    return (
        <footer className="Footer">
            <Logo/>
            <Copyright/>
            <IconContainer/>
        </footer>
    )
}

export default Footer
