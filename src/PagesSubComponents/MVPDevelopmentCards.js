import React from 'react'
import MVPDevelopmentCardsData from '../Components/Utills/MVPDevelopmentCardsData'

const MVPDevelopmentCards = () => {
    return (
        <>
            <div class="row">


                <MVPDevelopmentCardsData
                    cardNum="1"
                    cardText="Helping You Choose the Right Platform"
                />
                <MVPDevelopmentCardsData
                    cardNum="2"
                    cardText="Aligning MVP with Your Business Goals"
                />
                <MVPDevelopmentCardsData
                    cardNum="3"
                    cardText="Developing Clear KPIs to Measure Performance"
                />
                <MVPDevelopmentCardsData
                    cardNum="4"
                    cardText="Recording and Analyzing User Feedback"
                />
                <MVPDevelopmentCardsData
                    cardNum="5"
                    cardText="Revamping the MVP as per User Feedback"
                />
                <MVPDevelopmentCardsData
                    cardNum="6"
                    cardText="Testing New MVP until Perfected"
                />
            </div>

        </>
    )
}

export default MVPDevelopmentCards
