import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,

} from "mdbreact";

import './navbar.css'
import Header from './Header'

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleCollapseMobile = () => {
    if (window.orientation > -1) {
      console.log('je suis un mobile')
      this.setState({ isOpen: !this.state.isOpen });
    }
  }




  render() {
    return (
      <div className="">
        <Header />
        <MDBNavbar color="brown" dark expand="md" className="mdb-navba">
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/question-au-rav" onClick={this.toggleCollapseMobile}>Question au rav</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/video" onClick={this.toggleCollapseMobile} >Video</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/beit-din" onClick={this.toggleCollapseMobile}>Beit din</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/beraha-gdolim" onClick={this.toggleCollapseMobile}>Beraha gdolim</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/horaire" onClick={this.toggleCollapseMobile}>Horaire</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/nous-contacter" onClick={this.toggleCollapseMobile} >Nous contacter</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default NavbarPage;