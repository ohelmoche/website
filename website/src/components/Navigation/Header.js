import React from 'react';

import Colors from '../../constants/Colors'


import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarBrand, MDBContainer, MDBIcon, MDBDropdownToggle, MDBDropdown, MDBDropdownMenu, MDBDropdownItem

} from "mdbreact";

const Header = ({ classes }) => {


    return (
        <MDBNavbar dark expand="md" color={Colors.colorPrincipal} className="nav "  >
            <MDBContainer>
                <MDBNavbarBrand href="/" className={classes.NavBarHeaderTitle} >
                    <h1 className={classes.NavBarHeaderTitle} >Ohel Moche</h1>
                </MDBNavbarBrand>


                <img src={require('../../assets/img/logo1.jpg')}className="rounded float-left" alt="aligment" height="40" width="100" />


                <MDBNavbarNav right>
                    <MDBNavItem style={{ marginRight: 15 }}>
                        <MDBNavLink active to="/dons" >
                            {/* <MDBIcon icon="donate" className="mr-1" /> */}
                            <MDBIcon fab icon="paypal" className="mr-1"/>
                            <MDBIcon fab icon="cc-visa" className="mr-2"/>
                            Faire un don
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon icon="user" className="mr-1" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default" right>
                                <MDBDropdownItem ><MDBNavLink to="/log-in" ><span className={classes.headerNavBarItem}>S'enregistrer</span></MDBNavLink></MDBDropdownItem>
                                <MDBDropdownItem ><MDBNavLink to="/sign-up" ><span className={classes.headerNavBarItem}>S'inscrire</span></MDBNavLink></MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    )

}


export default Header
