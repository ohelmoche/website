import React from 'react';




import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarBrand, MDBContainer, MDBIcon ,MDBDropdownToggle ,MDBDropdown  , MDBDropdownMenu , MDBDropdownItem

} from "mdbreact";

const Header = ({ classes }) => {


    return (
        <MDBNavbar dark expand="md" color="unique-color" className={classes.NavBarHeader}  >
            <MDBContainer>
                <MDBNavbarBrand href="/" className={classes.NavBarHeaderTitle} >
                    <h1 className={classes.NavBarHeaderTitle} >Ohel Moche</h1>
                </MDBNavbarBrand>

                <MDBNavbarNav href="/">
                    <img src="https://www.clubsportive.nl/wp-content/uploads/2018/12/logo-example-1.jpg" className="rounded float-left" alt="aligment" height="50" width="100" />
                </MDBNavbarNav>

                <MDBNavbarNav right>
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
