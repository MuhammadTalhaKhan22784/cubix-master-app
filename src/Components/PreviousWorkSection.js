import React from 'react'
import PreviousWorkSectionData from './PreviousWorkSectionData'
import foodlyMobile1 from '../Images/foodly-mobile-1.png'
import foodlyMobile2 from '../Images/foodly-mobile-2.png'
import foodlySecIcon from '../Images/foodly-sec-icn.png'


const PreviousWorkSection = () => {
    return (
        <>
            <div className="prev-work-section container">
                <PreviousWorkSectionData
                    prevImg1={foodlyMobile1}
                    prevImg2={foodlyMobile2}
                    prevImg3={foodlySecIcon}
                    prevImg4="https://www.cubix.co/themes/responsiv-clean/assets/images/home/foodly-mobile-image-3.png"
                    prevText="MOBILE APP"
                    prevHeading="Foodly - the hub of delicious cuisines"
                    prevParagraph="Order breakfast, lunch, or dinner, rate your favorite restaurants and track your order - one platform to curb your hunger."
                
                />



                {/* <div className="prev-work-items ">
                    <div className="prev-work-item-1">
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/foodly-mobile-2.png" />
                    </div>
                    <div className="prev-work-item-2">
                        <div>
                            <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/foodly-sec-icn.png" />
                        </div>
                        <span>MOBILE APP</span>
                        <h3>Foodly - the hub of delicious cuisines</h3>
                        <p>Order breakfast, lunch, or dinner, rate your favorite restaurants and track your order - one platform to curb your hunger.</p>
                        <button>VIEW CASE STUDY</button>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default PreviousWorkSection
