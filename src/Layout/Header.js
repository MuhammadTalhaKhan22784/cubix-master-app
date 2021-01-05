import React, { Fragment } from 'react'
import HomeBackgroundSection from '../Components/Utills/HomeBackgroundSection'
// import Navbar from '../Layout/navbar/navbar'
import Navbar from './navbar/navbar'
// import Navbar from '../Layout/Navbar'
const Header = () => {

    return (
        <Fragment>
            <Navbar/>
            <HomeBackgroundSection />
        </Fragment>
    )
}

export default Header
