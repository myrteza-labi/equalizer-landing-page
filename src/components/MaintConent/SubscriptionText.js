import React from 'react'
import './SubscriptionText.css'; 

function SubscriptionText() {
    return (
        <div className="SubscriptionText">

            <p className="subrscriptionTitle">Premium EQ</p>
            <p className="subscriptionPresentation">
                Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take 
                your listening experience to a whole new level and access all our incredible features!
            </p>

            <div className="priceBox">
                <p className="subscriptionPrice"> 
                    $4 
                </p>
                <p className="priceBy">
                    /month
                </p>
            </div>
            
        </div>
    )
}

export default SubscriptionText
