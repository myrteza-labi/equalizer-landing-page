import React from 'react'
import './EqualizeApp.css'; 
import Logo from './Logo'; 
import ImgDecoration from './ImgDecoration'; 
import TextIntroduction from './TextIntroduction'; 
import MainContent from './MaintConent/MainContent'; 
import Footer from './Footer/Footer'; 
import ShadowDecoration from './ShadowDecoration'; 

function EqualizeApp() {
    return (
        <div className="EqualizeApp">
            <ImgDecoration/>
            <ShadowDecoration/>
            <Logo id={"logoMain"}/>
            <TextIntroduction/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default EqualizeApp
