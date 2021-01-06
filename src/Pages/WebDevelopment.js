import React from 'react'
import '../Pages/Styles/WebDevelopment.css'
// import Navbar from '../Layout/Navbar'
import Navbar from '../Layout/navbar/navbar'
import WebDevelopmentSection1 from '../PagesSubComponents/WebDevelopmentSection1'
import WebDevelopmentSection2 from '../PagesSubComponents/WebDevelopmentSection2'
import WebDevelopmentSection3 from '../PagesSubComponents/WebDevelopmentSection3'
import WebDevevelopmentSection4 from '../PagesSubComponents/WebDevevelopmentSection4'
import WebDevelopmentSection6 from '../PagesSubComponents/WebDevelopmentSection6'
import WebDevelopmentSection7 from '../PagesSubComponents/WebDevelopmentSection7'
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
