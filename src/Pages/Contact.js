import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Pages/Styles/Contact.css'
import ContactForm from '../Components/Utills/ContactForm';


const Contact = () => {
    const locations = ["Headquarter","Karachi","Dubai"];
    return (
        <>
            <div className="contact-content">
                <div className="contact-left-content">
                    <div className="sub-contact-1">
                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg" />
                    </div>
                    <div className="sub-contact-2">
                        <Swiper className="py-5" loop={true} pagination={{renderBullet: (i, className)=>{
                            return `<span class="text-white checking" style="cursor: pointer;"> ${locations[i]} </span>`
                        }}} navigation={true} grabCursor={true}>
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
                    <div className="contact-right-top">
                        <div className="con-top-1">
                            <i className="fas fa-envelope"></i>
                            <span>info@cubix.co</span>
                        </div>
                        <div className="con-top-2">
                            <i className="fas fa-phone-alt"></i>
                            <span>866-978-2220</span>
                        </div>
                    </div>
                    <ContactForm />
                </div>

            </div>
        </>
    )
}

export default Contact
