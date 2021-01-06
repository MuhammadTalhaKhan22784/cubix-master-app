import React from 'react'
import WebDevelopmentSection2Data from '../Components/Utills/WebDevelopmentSection2Data'
import '../Pages/Styles/WebDevelopment.css'
const WebDevelopmentSection2 = (props) => {
    return (
        <>
            <div 
            style={{backgroundColor: props.colorChange ? "white" : "#f4f5f8"}}
            className="web-dev-sec-2">
                <h2>Worked with leading industries</h2>
                <div className="web-dev-sec-2-main">
                    <div className="container">
                        
                        <WebDevelopmentSection2Data />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebDevelopmentSection2
