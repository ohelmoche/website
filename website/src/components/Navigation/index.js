import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBIcon, MDBNavbarBrand

} from "mdbreact";


import { withStyles } from '@material-ui/core/styles';
import styles from '../../constants/style'


import Header from './Header'




class NavbarPage extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    isOpen: false,
    fixedNavBar: ""
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleCollapseMobile = () => {
    if (window.orientation > -1) {
      console.log('je suis un mobile')
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  handleScroll = () => {
    //console.log(this.myRef.getBoundingClientRect().top)
    if (this.myRef.getBoundingClientRect().top < 0) {
      this.state.fixedNavBar !== "top" && this.setState({ fixedNavBar: "top" })
    } else {
      this.state.fixedNavBar !== "" && this.setState({ fixedNavBar: "" })
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <div className="">
        <Header classes={classes} />
        <div ref={(el) => this.myRef = el}>
          <MDBNavbar color="unique-color" dark expand="md" className={classes.navbar} fixed={this.state.fixedNavBar}  >
            <MDBContainer>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar >

                <MDBNavbarBrand href="/" >
                    <MDBIcon icon="home" className="mr-1" />
                </MDBNavbarBrand>

                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="/question-au-rav" onClick={this.toggleCollapseMobile}>Question au rav</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/video" onClick={this.toggleCollapseMobile} >Shiourims</MDBNavLink>
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
                    <MDBNavLink to="/dons" onClick={this.toggleCollapseMobile}>Dons</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/nous-contacter" onClick={this.toggleCollapseMobile} >Nous contacter</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NavbarPage);