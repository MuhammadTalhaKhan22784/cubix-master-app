import React from 'react'
import { Link } from 'react-router-dom'
import MyVerticallyCenteredModal from '../Components/Modals/Modal'

const Navbar = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       
                        <ul className="navbar-nav ms-5 mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item ms-3">
                                <Link className="nav-link nav-link-text" to="/services">Services</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link nav-link-text" to="/mobile-application">Solutions</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link nav-link-text" to="/mvp-development">Work</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link nav-link-text" to="/artificial-intelligence">About</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link nav-link-text" to="/web-development">Resources</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link nav-link-text" to="contact">Contact</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav-link-text" href="#">866-978-2220</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav-link-text" href="#"><button onClick={() => setModalShow(true)} className="estimate_project_btn">ESTIMATE PROJECT</button></a>
                            </li>

                            <MyVerticallyCenteredModal

                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
