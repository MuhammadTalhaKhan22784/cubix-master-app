import React from 'react'
import WebComponentData from '../Components/Utills/WebComponentData'
import Navbar from '../Layout/Navbar'
import MVPDevelopmentSection1 from '../ServicesSubComponents/MVPDevelopmentSection1'
import '../Pages/Styles/ArtificialIntelligence.css'
import TabItems from '../Components/Utills/TabItems'
import WebDevelopmentSection2 from '../ServicesSubComponents/WebDevelopmentSection2'
import WebDevevelopmentSection4 from '../ServicesSubComponents/WebDevevelopmentSection4'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer'



const ArtificialIntelligence = () => {
    return (
        <>
            <Navbar />
            <WebComponentData
                isBgReplace="false"
                imgIcon="https://www.cubix.co/themes/responsiv-clean/assets/images/artificial-intelligence/artificial-intelligence-icon.svg"
                bgText="Ai & machine learning"
                bgPara="OurOur in-house, doctorate-level research and design team
              brings machine learning and artificial intelligence to life."
            />
            <div className="ai-section-1">
                <MVPDevelopmentSection1
                    mvdText1="Simplify your business via our ai"
                    mvdText2="and machine learning solutions"
                    mvdPara1="We build custom AI and Machine Learning solutions."
                    mvdPara2="You can approach us with a business challenge, and we will work with you to see if it can be solved using machine intelligence. We will never sell a full-blown solution build up front. Instead, we recommend feasibility hacking and rapid prototyping."
                />
            </div>
            <div className="ai-section-2">
                <div className="container">
                    <div className="ai-cards">

                        <div className="col-lg-2">
                            <TabItems imgSource="https://www.cubix.co/themes/responsiv-clean/assets/images/common-images/web-device.svg"
                                imgText="Web" />
                        </div>
                        <div className="col-lg-2">
                            <TabItems imgSource="https://www.cubix.co/themes/responsiv-clean/assets/images/common-images/mobile-device.svg"
                                imgText="Mobile" />
                        </div>
                        <div className="col-lg-2">
                            <TabItems imgSource="https://www.cubix.co/themes/responsiv-clean/assets/images/common-images/wearable-device.svg"
                                imgText="Wearable" />
                        </div>
                        <div className="col-lg-2">
                            <TabItems imgSource="https://www.cubix.co/themes/responsiv-clean/assets/images/common-images/tv-device.svg"
                                imgText="Tv" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ai-section-3">
                <WebDevelopmentSection2 colorChange="false" />

            </div>
            <WebDevevelopmentSection4/>
            <ProductExperienceSection/>
            <Footer/>
        </>
    )
}

export default ArtificialIntelligence
