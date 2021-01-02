import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const ServicesSwiperLeftCards = () => {
    return (
        <>
            <div className="services-swiper-Section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">

                            <Swiper navigation={true} grabCursor={true}>

                                <SwiperSlide>
                                    <div className="s-swipe-2">
                                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/services-page/services-page-three.jpg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="s-swipe-2">
                                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/services-page/services-portfolio-2-new.jpg" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="s-swipe-1 col-lg-6 ">
                            <div className="s-swipe-num">
                                <h6>01</h6>
                            </div>
                            <div className="s-swipe-h">
                                <h2>Ideation and evaluation</h2>
                            </div>
                            <div className="s-swipe-p">
                                <p>Enterprises are fast adopting technology to improve their productivity, bring efficiency, and remove barriers preventing free and timely flow of information within the enterprise.</p>
                            </div>
                            <div className="s-swipe-list">
                                <ul className="s-swipe-ul">
                                    <li>Rapid Strategy Workshop™</li>
                                    <li>Define project value proposition</li>
                                    <li>Identify development and deployment requirements + constraints.</li>
                                    <li>Perform market research - comparative applications/products.</li>
                                    <li>Identify key opportunities for the feature set.</li>
                                    <li>Growth Hacking</li>
                                </ul>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesSwiperLeftCards
