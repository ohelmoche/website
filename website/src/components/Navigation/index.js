import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBIcon, MDBNavbarBrand

} from "mdbreact";


import { withStyles } from '@material-ui/core/styles';
import styles from '../../constants/style'
import Colors from '../../constants/Colors'

import Header from './Header'

import { AuthUserContext } from '../../services/Session';


const Navigation = ({classes }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ?
          <NavbarPage email={authUser.email} isLogin={true}   classes={classes} />
          :
          <NavbarPage email={""} classes={classes} isLogin={false} />
      }
    </AuthUserContext.Consumer>
  </div>
);

class NavbarPage extends Component {


  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.sticky = 0
  }
  state = {
    isOpen: false,
    fixedNavBar: "",
    hidden: false
  };

  componentDidMount = () => {
    this.myRef = document.getElementById("navbar_pricipal");
    this.sticky = this.myRef.offsetTop;
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
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
   // console.log(window.pageYOffset + ' ' + this.sticky)

    if (window.pageYOffset >= this.sticky) {
      this.myRef.classList.add("sticky")
    } else {
      this.myRef.classList.remove("sticky");
    }

  }


  render() {
    const { classes , isLogin , email } = this.props;

    return (
      <div className="">
        <Header classes={classes} isLogin={isLogin}  email={email} />

          <MDBNavbar color={Colors.colorPrincipal} dark expand="md" className="" fixed={this.state.fixedNavBar} id="navbar_pricipal" >
            <MDBContainer>
              <MDBNavbarToggler left onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar >

                <MDBNavbarBrand href="/" >
                    <MDBIcon icon="torah" className="mr-1" />
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
                  {/* <MDBNavItem>
                    <MDBNavLink to="/beraha-gdolim" onClick={this.toggleCollapseMobile}>Beraha gdolim</MDBNavLink>
                  </MDBNavItem> */}
                  <MDBNavItem>
                    <MDBNavLink to="/horaire" onClick={this.toggleCollapseMobile}>Horaire</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/dons" onClick={this.toggleCollapseMobile}>Dons</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/nous-contacter" onClick={this.toggleCollapseMobile} >Nous contacter</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/nous-decouvrire" onClick={this.toggleCollapseMobile} >Nous decouvrire</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </div>
    );
  }
}

export default withStyles(styles)(Navigation);