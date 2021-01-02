import React from 'react'
import '../Pages/Styles/Services.css'
const ServicePageCards = (props) => {
    return (
        <>
            <div className="sp-card">
                <div className="sp-card-items">
                    <h2>{props.cardNum}</h2>
                    <p>{props.cardText}</p>
                </div>
            </div>
        </>
    )
}

export default ServicePageCards
