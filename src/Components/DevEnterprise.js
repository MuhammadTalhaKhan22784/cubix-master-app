import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const DevEnterprise = () => {
    return (
        <div className="testimonials">
            <div className="dev-enterprise-section">
                <div className="dev-eterprise-heading">
                    <h2>We develop enterprise-grade software solutions for businesses.</h2>
                </div>
                <Swiper navigation={true} grabCursor={true} className="dev-enterprise-slider">
                    <SwiperSlide>
                        <div className="dev-enterprise-para">
                            <p> “The team stood out because of their swift response time and patience. Lozpdata provided one contact person, which helped streamline project management and coordination. Not only did Lozpdata follow the budget and timeline, the team even offered additional services at no extra charge.” </p>
                            <div className="dev-enterprise-para-2" >
                                <h5>Melissa teward, VP of Marketing</h5>
                                <p>National Fatherhood Initiative</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="dev-enterprise-para">
                            <p> “The team stood out because of their swift response time and patience. Lozpdata provided one contact person, which helped streamline project management and coordination. Not only did Lozpdata follow the budget and timeline, the team even offered additional services at no extra charge.” </p>
                            <div className="dev-enterprise-para-2" >
                                <h5>Melissa teward, VP of Marketing</h5>
                                <p>National Fatherhood Initiative</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="dev-enterprise-para">
                            <p> “The team stood out because of their swift response time and patience. Lozpdata provided one contact person, which helped streamline project management and coordination. Not only did Lozpdata follow the budget and timeline, the team even offered additional services at no extra charge.” </p>
                            <div className="dev-enterprise-para-2" >
                                <h5>Melissa teward, VP of Marketing</h5>
                                <p>National Fatherhood Initiative</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="dev-enterprise-end">
                    <img src="https://www.cubix.co/storage/app/media/home/clutch-icon.svg"/>
                    <h5>4.8 Rating on Clutch</h5>
                    <h4>Top app developers</h4>
                </div>
            </div>
        </div>
    )
}

export default DevEnterprise
