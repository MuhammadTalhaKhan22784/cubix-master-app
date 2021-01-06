import React from 'react'
import MVPDevelopmentSection4Data from '../Components/Utills/MVPDevelopmentSection4Data'

const MVPDevelopmentSection4 = () => {
    return (
        <>
            <div className="section-4">
                <div className="container">
                    <h2 className="text-center s4-heading">Mvp product development launches a minimum product, collects user feedback, and improves the product until it’s everything a user wants. a regular project encounters user feedback after the launch when it may be too late for changes.</h2>
                    <div className="row">
                        <MVPDevelopmentSection4Data 
                        cardImg1="https://www.cubix.co/themes/responsiv-clean/assets/images/mvp-startup-development/building-an-mvp-img.png"
                        cardImg2="https://www.cubix.co/themes/responsiv-clean/assets/images/mvp-startup-development/building-an-mvp-img-btm.png"
                        cardText="Building an mvp"
                        />
                        <MVPDevelopmentSection4Data 
                        cardImg1="https://www.cubix.co/themes/responsiv-clean/assets/images/mvp-startup-development/building-regular-project-img.png"
                        cardImg2="https://www.cubix.co/themes/responsiv-clean/assets/images/mvp-startup-development/building-regular-project-img-btm.png"
                        cardText="Building a regular project"
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default MVPDevelopmentSection4
