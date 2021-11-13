import React from 'react'
import './EqualizeApp.css'; 
import Logo from './Logo'; 
import ImgDecoration from './ImgDecoration'; 
import TextIntroduction from './TextIntroduction'; 
import MainContent from './MaintConent/MainContent'; 
import Footer from './Footer/Footer'; 

function EqualizeApp() {
    return (
        <div className="EqualizeApp">
            <Logo/>
            <TextIntroduction/>
            <ImgDecoration/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default EqualizeApp
