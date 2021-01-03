import React, { Fragment } from 'react'
import HomeBackgroundSection from '../Components/Utills/HomeBackgroundSection'
import Navbar from './navbar/navbar'

const Header = () => {

    return (
        <Fragment>
            <Navbar/>
            <HomeBackgroundSection />
        </Fragment>
    )
}

export default Header
