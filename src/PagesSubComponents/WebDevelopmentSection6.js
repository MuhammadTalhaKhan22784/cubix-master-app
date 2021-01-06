import React from 'react'
import '../Pages/Styles/WebDevelopment.css'
const WebDevelopmentSection6 = (props) => {
    return (
        <>
            <div className="web-dev-sec-6">
                <div style={{ flexDirection: props.isReplace ? 'row-reverse' : 'flex' }}
                 className="web-card-main">
                    <div className="col-lg-6">
                        <div className="web-card-text">
                            <h2>Software as a service</h2>
                            <p>We provide Software-as-a-Service to clients’ to help them put resources to more efficient use and make informed business decisions. Our SaaS products help companies grow exponentially and penetrate untapped markets through better strategic planning and trend forecasts.</p>
                            <p>Cubix’s Software-as-a-Service solutions are used by Fortune 500 companies, allowing them to take advantage of the latest technology and boost business multiple-fold.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/software-as-a-service-1.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebDevelopmentSection6
