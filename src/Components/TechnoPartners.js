import React from 'react'
import TechnoLogos from './Utills/TechnoLogos'
import GoogleDevImg from '../Images/Google-Developer-Certified-Agency.png'
import AdobeSolPartnerImg from '../Images/Adobe-Solution-Partner-Program.png'
import MicrosoftCertifiedImg from '../Images/Microsoft-Certified-Consulting-Partner.png'
import AmazonWebServicesImg from '../Images/Amazon-Web-Services-Partner.png'


const TechnoPartners = () => {
    return (
        <>
            <div className="technoPartner-section " >
                <div className="technoPartner-heading">
                    <h2>We partner with the world’s technology leaders.</h2>
                </div>
                <div className="techno-partners-logo container">
                <TechnoLogos imageSource={GoogleDevImg} imageSourceText="Google developer certified agency"/>
                <TechnoLogos imageSource={AdobeSolPartnerImg} imageSourceText="Adobe solution partner program"/>
                <TechnoLogos imageSource={MicrosoftCertifiedImg} imageSourceText="Microsoft certified consulting partner"/>
                <TechnoLogos imageSource={AmazonWebServicesImg} imageSourceText="Amazon web services partner"/>
                </div>

                <hr className="mb-hr"/>
            </div>
        </>
    )
}

export default TechnoPartners
