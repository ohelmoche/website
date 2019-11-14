import React from 'react';

import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarBrand

} from "mdbreact";

const Header = () => (
    <MDBNavbar color="brown lighten-1" dark expand="md" className="mdb-navba">
        <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
            <h1 className="white-text">Ohel Moche</h1>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink to="/sign-up">S'insccrire</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/log-in">Se connecter</MDBNavLink>
            </MDBNavItem>
        </MDBNavbarNav>
    </MDBNavbar>
);


export default Header
