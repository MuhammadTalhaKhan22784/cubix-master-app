import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination,Autoplay } from 'swiper';
import BackgroundSectionData from './BackgroundSectionData';

SwiperCore.use([Navigation,Pagination,Autoplay]);

const HomeBackgroundSection = () => { 
    // const navigationPrevRef = React.useRef(null)
    // const navigationNextRef = React.useRef(null)
    
    return (
        <div className="position-relative main" >
            
            <Swiper loop={true} navigation={true} grabCursor={true} autoplay={
                {delay: 2500,
                disableOnInteraction: false,}
            }
            // onSwiper={(swiper) => {
            //     // Delay execution for the refs to be defined
            //     setTimeout(() => {
            //       // Override prevEl & nextEl now that refs are defined
            //       swiper.params.navigation.prevEl = navigationPrevRef.current
            //       swiper.params.navigation.nextEl = navigationNextRef.current
        
            //       // Re-init navigation
            //       swiper.navigation.destroy()
            //       swiper.navigation.init()
            //       swiper.navigation.update()
            //     })
            //   }}
            // navigation={{
            //     prevEl: navigationPrevRef.current,
            //     nextEl: navigationNextRef.current,
            //   }}
>
    
                <SwiperSlide style={{ height: `100vh` }} className="bg-image bg_1">
                    <BackgroundSectionData
                        bgTest1="Revolutionizing"
                        bgTest2="enterprises digitally"
                        bgPara="Unlock the potential of enterprise portals by integrating data repositories and content management system into a single system that delivers seamless user experience."
                    />
                </SwiperSlide>
                <SwiperSlide style={{ height: `100vh` }} className="bg-image bg_2">
                    <BackgroundSectionData
                        bgTest1="Blockchain"
                        bgTest2="Development"
                        bgPara="We are an extensively experienced blockchain development company with a detailed understanding of cloud services, AI and IoT. We create distributed ledger applications risk-free and faster."
                    />
                </SwiperSlide>
                <SwiperSlide style={{ height: `100vh` }} className="bg-image bg_3">
                    <BackgroundSectionData
                        bgTest1="Ai and machine"
                        bgTest2="Learning"
                        bgPara="Our in-house, doctorate-level research and design team brings machine learning and artificial intelligence to life."
                    />
                </SwiperSlide>

                <SwiperSlide style={{ height: `100vh` }} className="bg-image bg_4">
                    <BackgroundSectionData
                        bgTest1="Ai and machine"
                        bgTest2="Learning"
                        bgPara="Our in-house, doctorate-level research and design team brings machine learning and artificial intelligence to life."
                    />
                </SwiperSlide>

            </Swiper>
            {/* <div ref={navigationPrevRef} >
                PREVIOUS
            </div>  
      <div ref={navigationNextRef} >NEXT</div> */}
        </div>
    )
}

export default HomeBackgroundSection
