import React from 'react'
import FooterData from '../Components/Utills/FooterData'
import FooterData2 from '../Components/Utills/FooterData2'

const Footer = () => {
    return (
        <>
            <div className="footer container">
                <FooterData
                    countryImage="https://www.cubix.co/storage/app/media/home/usa-flag-icon.svg"
                    countryName="Florida"
                    countryText="700 S. Rosemary Ave, Suite 204-118 West Palm Beach, FL 33401"
                />

                <FooterData
                    countryImage="https://www.cubix.co/storage/app/media/home/pakistan-flag-icon.svg"
                    countryName="Karachi"
                    countryText="D23, Block 9 Clifton, Karachi, Sindh 75600, Pakistan"
                />
                <FooterData
                    countryImage="https://www.cubix.co/storage/app/media/home/uae-flag-icon.svg"
                    countryName="Dubai"
                    countryText="Building 11, Level 7, Bay Square, Business Bay, UAE"
                />
                <FooterData2 />
                <FooterData2 />
            
            </div>
        </>
    )
}

export default Footer
