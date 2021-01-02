import React from 'react'
import PreviousWorkSectionData from '../PreviousWorkSectionData'
import curiousLogoIcon from '../../Images/curious-logo-icn.png'
import curiousMobile1 from '../../Images/Curious-mobile-1.png'
import curiousMobile2 from '../../Images/Curious-mobile-2.png'

const PreviousWorkSectionThird = () => {
    return (
        <>
            <div className="prev-work-section container">
                <PreviousWorkSectionData
                    isData="false"
                    prevImg1={curiousMobile2}
                    prevImg2={curiousMobile1}
                    prevImg3={curiousLogoIcon}
                    prevImg4="https://www.cubix.co/themes/responsiv-clean/assets/images/home/foodly-mobile-image-3.png"
                    prevText="MOBILE APP"
                    prevHeading="Curious - a social platform to connect globally with complete anonymity"
                    prevParagraph="Get insights into the latest happenings and connect with people of similar interests in your vicinity with complete anonymity."

                />
            </div>
        </>
    )
}

export default PreviousWorkSectionThird
