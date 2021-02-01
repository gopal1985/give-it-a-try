import React, { Fragment } from "react";
import {Route} from "react-router-dom";
import Buyer from './components/pages/buyer/Buyer';
import Seller from './components/pages/seller/Seller';
import Home from './components/pages/home/Home';

export const siteURLs = {
    home: "/",
    seller: "/seller",
    buyer: "/buyer",
    about: "/about",
    contact: "/contact",
}

export const SiteRouter =(
    <Fragment>
        <Route path="/"> 
            <Home /> 
            exact 
        </Route>
        <Route path="/seller">
            <Seller />
            exact
        </Route>
        <Route path="/buyer">
            <Buyer />
            exact
        </Route>
    </Fragment>
);

export default SiteRouter;