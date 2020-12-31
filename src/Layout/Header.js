import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import HomeBackgroundSection from '../Components/Utills/HomeBackgroundSection'

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-5 mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item ms-3">
                                <a className="nav-link nav-link-text" href="#">Services</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link nav-link-text" href="#">Solutions</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link nav-link-text" href="#">Work</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav-link-text" href="#">About</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav-link-text" href="#">Resources</a>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link nav-link-text" to="contact">Contact</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav-link-text" href="#">866-978-2220</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav-link-text" href="#"><button className="estimate_project_btn">ESTIMATE</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <HomeBackgroundSection/>
        </Fragment>
    )
}

export default Header
