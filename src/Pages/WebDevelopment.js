import React from 'react'
import '../Pages/Styles/WebDevelopment.css'
import Navbar from '../Layout/Navbar'
import WebDevelopmentSection1 from '../ServicesSubComponents/WebDevelopmentSection1'
import WebDevelopmentSection2 from '../ServicesSubComponents/WebDevelopmentSection2'

const WebDevelopment = () => {
    return (
        <>
            <Navbar />
            <div className="bg-web-development">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-web-dev-content">
                                <div className="bg-web-icon">
                                    <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/web-development-icon.svg" />
                                </div>
                                <h2>Website development</h2>
                                <p>Websites that help disrupt industries and set new benchmarks</p>
                                <button>LET'S GET STARTED</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WebDevelopmentSection1/>
            <WebDevelopmentSection2/>
        </>
    )
}

export default WebDevelopment
