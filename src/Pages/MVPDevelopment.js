import React from 'react'
import Navbar from '../Layout/Navbar'
import '../Pages/Styles/MVPDevelopment.css'
import MVPDevelopmentCards from '../ServicesSubComponents/MVPDevelopmentCards'
import MVPDevelopmentSection1 from '../ServicesSubComponents/MVPDevelopmentSection1'
import MVPDevelopmentSection2 from '../ServicesSubComponents/MVPDevelopmentSection2'
import MVPDevelopmentSection3 from '../ServicesSubComponents/MVPDevelopmentSection3'
import MVPDevelopmentSection4 from '../ServicesSubComponents/MVPDevelopmentSection4'
import MVPDevelopmentSection5 from '../ServicesSubComponents/MVPDevelopmentSection5'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer';
const MVPDevelopment = () => {
    return (
        <>
            <Navbar />
            <div class="hero">
                <div class="container">
                    <img className="sd-icon" src="https://www.cubix.co/themes/responsiv-clean/assets/images/mvp-startup-development/MVP-startup-development-icon.svg" alt="" />
                    <h1 class="sd-heading">Mvp product <br /> development</h1>
                    <p class="sd-para">
                        Startups are eager to release their final product in the
                        market and dream to conquer the industry with it.
                        Developing such a product takes time and by the time it is
                        ready, the ever-evolving market trends change. That’s the
                        mistake you don’t want to make. Launch your business in
                        the digital arena with a minimum viable product, collect
                        user feedback, and update it with what user’s love.
                            </p>
                    <button class="butn">SEND US REQUEST</button>
                </div>
            </div>
            <div className="section-1">
                <div className="container">
                   <MVPDevelopmentSection1/>
                   <MVPDevelopmentCards/>
                </div>
            </div>

            <MVPDevelopmentSection2/>
            <MVPDevelopmentSection3/>
            <MVPDevelopmentSection4/>
            <MVPDevelopmentSection5/>
            <ProductExperienceSection/>
            <Footer/>
        </>
    )
}

export default MVPDevelopment
