import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import '../Pages/Styles/Contact.css'

SwiperCore.use([Navigation])

const Contact = () => {
    return (
        <>
            <div className="contact-content">
                <div className="contact-left-content">
                    <div className="sub-contact-1">
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg" />
                    </div>
                    <div className="sub-contact-2">
                        <Swiper loop={true} navigation={true} grabCursor={true}>
                            <SwiperSlide>
                                <div className="sub-contact-2-item-1">
                                    <h2>Dubai</h2>
                                    <p>Building 11, Level 7,</p>
                                    <p>Bay Square, Business Bay, UAE</p>
                                    <span>VIEW LOCATION</span>

                                </div>
                                <div className="sub-contact-2-item-2">
                                    <img className="sub-cont-img-1" src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/birds.svg" />
                                    <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/dubai-landscape.svg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="contact-right-content">

                </div>
            </div>
        </>
    )
}

export default Contact
