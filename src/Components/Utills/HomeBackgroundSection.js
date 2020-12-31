import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation])

const HomeBackgroundSection = () => {
    return (
        <Swiper navigation={true} grabCursor={true}>
            <SwiperSlide style={{height: `100vh`}} className="bg-image bg_1">
                
            </SwiperSlide>
            <SwiperSlide style={{height: `100vh`}} className="bg-image bg_2">
            </SwiperSlide>
            <SwiperSlide style={{height: `100vh`}} className="bg-image bg_3">
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeBackgroundSection
