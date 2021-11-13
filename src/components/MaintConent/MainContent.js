import React from 'react'
import './MainContent.css'; 
import OutsideImage from './OutsideImage'; 
import BgDecoration from './BgDecoration'; 
import SubscriptionBox from './SubscriptionBox'; 

function MainContent() {
    return (
        <div className="MainContent">
            <OutsideImage/>
            <BgDecoration/>
            <SubscriptionBox/>
        </div>
    )
}

export default MainContent
