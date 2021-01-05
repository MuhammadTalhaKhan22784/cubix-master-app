import React from 'react'
import '../Pages/Styles/WebDevelopment.css'
// import Navbar from '../Layout/Navbar'
import Navbar from '../Layout/navbar/navbar'
import WebDevelopmentSection1 from '../ServicesSubComponents/WebDevelopmentSection1'
import WebDevelopmentSection2 from '../ServicesSubComponents/WebDevelopmentSection2'
import WebDevelopmentSection3 from '../ServicesSubComponents/WebDevelopmentSection3'
import WebDevevelopmentSection4 from '../ServicesSubComponents/WebDevevelopmentSection4'
import WebDevelopmentSection6 from '../ServicesSubComponents/WebDevelopmentSection6'
import WebDevelopmentSection7 from '../ServicesSubComponents/WebDevelopmentSection7'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer'
import WebComponentData from '../Components/Utills/WebComponentData'


const WebDevelopment = () => {
    return (
        <>
            <Navbar />
            <WebComponentData 
                imgIcon="https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/web-development-icon.svg"
                bgText="Website development"
                bgPara="Websites that help disrupt industries and set new benchmarks"
            /> 
            <WebDevelopmentSection1/>
            <WebDevelopmentSection3/>
            <WebDevelopmentSection2/>
            <WebDevevelopmentSection4/>
            <WebDevelopmentSection6/>
            <WebDevelopmentSection6 isReplace="false"/>
            <WebDevelopmentSection6/>
            <WebDevelopmentSection7/>
            <ProductExperienceSection/>
            <Footer/>
        </>
    )
}

export default WebDevelopment
