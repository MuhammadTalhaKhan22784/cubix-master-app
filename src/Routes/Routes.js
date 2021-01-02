import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Services from '../Pages/Services';
import WebDevelopment from '../Pages/WebDevelopment';


const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/web-development">
                        <WebDevelopment />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
