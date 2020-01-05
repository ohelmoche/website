import React from 'react';

import Colors from '../../constants/Colors'


import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarBrand, MDBContainer, MDBIcon, MDBDropdownToggle, MDBDropdown, MDBDropdownMenu, MDBDropdownItem

} from "mdbreact";

import SignOut from '../SignOut'

const Header = ({ classes, isLogin, email }) => {

    return (
        <MDBNavbar dark expand="md" color={Colors.colorPrincipal} className="nav "  >
            <MDBContainer>
                <MDBNavbarBrand href="/" className={classes.NavBarHeaderTitle} >
                    <h1 className={classes.NavBarHeaderTitle} >Ohel Moche</h1>
                </MDBNavbarBrand>


                <img src={require('../../assets/img/logo1.jpg')} className="rounded float-left" alt="aligment" height="40" width="100" />


                <MDBNavbarNav right>
                    <MDBNavItem style={{ marginRight: 15 }}>
                        <MDBNavLink active to="/nous-contacter">
                            <MDBIcon fab icon="waze" className="" />
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem style={{ marginRight: 15 }}>
                        <MDBNavLink active to="/dons" >
                            {/* <MDBIcon icon="donate" className="mr-1" /> */}
                            <MDBIcon fab icon="paypal" className="mr-1" />
                            <MDBIcon fab icon="cc-visa" className="mr-2" />
                            Dons
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon icon="user" className="mr-1" />
                                <span className='' >{email || ''}</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default p-0" right>
                                {
                                    isLogin === true ?
                                        <>
                                            <MDBDropdownItem className="p-0 text-center" ><MDBNavLink to="/log-in" >
                                                <SignOut />
                                            </MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className="p-0 text-center" ><MDBNavLink to="/edition" ><span className={classes.headerNavBarItem}>Edition</span></MDBNavLink></MDBDropdownItem>
                                        </>
                                        :
                                        <>
                                            <MDBDropdownItem className="p-0 text-center"><MDBNavLink to="/log-in" ><span className={classes.headerNavBarItem}>Se connecter</span></MDBNavLink></MDBDropdownItem>
                                            <MDBDropdownItem className="p-0 text-center" ><MDBNavLink to="/sign-up" ><span className={classes.headerNavBarItem}>S'enregistrer</span></MDBNavLink></MDBDropdownItem>
                                        </>
                                }
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    )

}


export default Header
