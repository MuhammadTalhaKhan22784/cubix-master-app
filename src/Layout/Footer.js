import React from 'react'
import FooterData from '../Components/Utills/FooterData'
import FooterData2 from '../Components/Utills/FooterData2'

const Footer = () => {
    return (
        <>
            <div className="footer container">
                <FooterData
                    countryImage="https://www.cubix.co/storage/app/media/home/usa-flag-icon.svg"
                    countryName="United states"
                    countryText="Son Jose , California"
                />

                <FooterData
                    countryImage="https://www.cubix.co/storage/app/media/home/pakistan-flag-icon.svg"
                    countryName="Pakistan"
                    countryText=" johar town J3 block, building number 149, Lahore"
                />

                <FooterData2 ftName="Services" />
                <FooterData2 ftName="&nbsp;" />
            </div>
            <div className="ft-hr">
                <hr />
            </div>
            <div className="footer-bottom container">
                <div>
                    <span>© 2020Lozpdata . All Rights Reserved. <strong>Terms of Use. Privacy Policy.</strong></span>
                </div>
                <div className="ft-icons">
                    <a href="https://web.facebook.com/LozpDataSolutions"><i class="fab fa-facebook-f" ></i></a>
                    <a href="https://www.linkedin.com/company/lozpdatasolutions"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/lozpdata"><i class="fab fa-twitter"></i></a>
                    <i class="fab fa-dribbble"></i>
                </div>

            </div>
        </>
    )
}

export default Footer
