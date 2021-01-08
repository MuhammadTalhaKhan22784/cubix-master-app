import React from 'react'
import DrivenProducts from '../Components/DrivenProducts';
import PreviousWorkSection from '../Components/PreviousWorkSection';
import PreviousWorkSectionSecond from '../Components/PreviousWorkSectionSecond';
import ProductExperienceSection from '../Components/ProductExperienceSection';
import TechnologyUse from '../Components/TechnologyUse';
import TechnoPartners from '../Components/TechnoPartners';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import DevEnterprise from '../Components/DevEnterprise';

import 'swiper/swiper-bundle.css';
import PreviousWorkSectionThird from '../Components/Utills/PreviousWorkSectionThird';
const Home = () => {
    return (
        <>
            <Header />
            <DrivenProducts />
            <TechnologyUse />
            <PreviousWorkSection />
            <PreviousWorkSectionSecond />
            <PreviousWorkSectionThird/>
             <DevEnterprise />
            <TechnoPartners />
            <ProductExperienceSection />
            <Footer />

        </>
    )
}

export default Home
