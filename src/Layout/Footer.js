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
                <FooterData2 ftName="Services" />
                <FooterData2 ftName="&nbsp;" />
            </div>
            <div className="ft-hr">
                <hr />
            </div>
            <div className="footer-bottom container">
                <div>
                    <span>© 2020 Cubix. All Rights Reserved. <strong>Terms of Use. Privacy Policy.</strong></span>
                </div>
                <div className="ft-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-dribbble"></i>
                </div>

            </div>
        </>
    )
}

export default Footer
