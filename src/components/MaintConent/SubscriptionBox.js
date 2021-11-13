import React from 'react'
import './SubscriptionBox.css'; 
import SubscriptionText from './SubscriptionText'; 
import DownloadBtn from './DownloadBtn'; 
import appleIcon from '../../assets/icon-apple.svg'; 
import androidIcon from '../../assets/icon-android.svg'; 

function SubscriptionBox() {
    return (
        <div className="SubscriptionBox">
            <SubscriptionText/>
            <DownloadBtn btnTitle={" iOS Download"} iconBtnSrc={appleIcon} iconBtnAlt={"icon apple"} color={"black"}/>
            <DownloadBtn btnTitle={" Android Download"} iconBtnSrc={androidIcon} iconBtnAlt={"icon android"} color={"white"}/>
        </div>
    )
}

export default SubscriptionBox
