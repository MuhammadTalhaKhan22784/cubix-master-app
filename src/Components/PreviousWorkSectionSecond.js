import React from 'react'
import hicticMobile1 from '../Images/hictic-mobile-1.png'
import hicticMobile2 from '../Images/hictic-mobile-2.png'
const PreviousWorkSectionSecond = () => {
    return (
        <>
            <div className="prev-work-section-2 container">

                <div class="prev-work-2-items">
                    <div class="row">
                        <div className="col-lg-6 prev-work-2-item-1">
                            <div>
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/hictic-logo-icn.png" />
                            </div>
                            <span>MOBILE APP</span>
                            <h3>Hictic - revolutionizing traditional avertising & digital marketing</h3>
                            <p>Launch new adverts and engage with your customers - an all-in-one platform that promotes your brand and builds engagement.</p>
                            <div><button className="view-case-btn">VIEW CASE STUDY</button></div>
                        </div>
                        <div className="col-lg-6 prev-work-2-item-2">
                        <img className="hictic-img-1" src={hicticMobile2} />
                            <img className="hictic-img-2" src={hicticMobile1} />
                            
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default PreviousWorkSectionSecond
