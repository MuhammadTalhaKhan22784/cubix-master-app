import React from 'react'
import foodlyMobile1 from '../Images/foodly-mobile-1.png'
import foodlyMobile2 from '../Images/foodly-mobile-2.png'
import foodlySecIcon from '../Images/foodly-sec-icn.png'

const PreviousWorkSection = () => {
    return (
        <>
            <div className="prev-work-section container">
                <div className="prev-work-section-heading">
                    <h2>We love transforming product ideas to digital realities.</h2>
                </div>

                <div class="prev-work-items ">
                    <div class="row">
                    <div className="col-lg-6 prev-work-item-1 ">
                        <img className="prev-img-0" src={foodlyMobile1}/>
                        <img className="prev-img-1" src={foodlyMobile2} />
                        <img className="prev-img-2" src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/foodly-mobile-image-3.png"/>                    
                    </div>
                    <div className="col-lg-6 prev-work-item-2 ">
                        <div>
                            <img src={foodlySecIcon} />
                        </div>
                        <span>MOBILE APP</span>
                        <h3>Foodly - the hub of delicious cuisines</h3>
                        <p>Order breakfast, lunch, or dinner, rate your favorite restaurants and track your order - one platform to curb your hunger.</p>
                        <div><button className="view-case-btn">VIEW CASE STUDY</button></div>
                    </div>

                    </div>
                </div>
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
