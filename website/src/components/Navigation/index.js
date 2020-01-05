import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarNav,MDBNavbarToggler, MDBCollapse, MDBContainer ,MDBNavbarBrand ,MDBIcon

} from "mdbreact";

import { Link } from 'react-router-dom';
import './navbar.css'

import { withStyles } from '@material-ui/core/styles';
import styles from '../../constants/style'
import Colors from '../../constants/Colors'

import Header from './Header'

import { AuthUserContext } from '../../services/Session';


const Navigation = ({ classes }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ?
          <NavbarPage email={authUser.email} isLogin={true} classes={classes} />
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

    
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    
    //console.log(scrollHeight)

    if (window.pageYOffset >= this.sticky && scrollHeight > 1125) {
      this.myRef.classList.add("sticky")
    } else {
      this.myRef.classList.remove("sticky");
    }

    
  }


  render() {
    const { classes, isLogin, email } = this.props;

    return (
      <div className="">
        <Header classes={classes} isLogin={isLogin} email={email} />


        <MDBNavbar color={Colors.colorPrincipal} dark expand="md" className="" fixed={this.state.fixedNavBar} id="navbar_pricipal" >
          <MDBContainer>
            <MDBNavbarToggler left onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar >

              <MDBNavbarBrand href="/" >
                <MDBIcon icon="home" className="" />
              </MDBNavbarBrand>

              <MDBNavbarNav left>
                <div id="nav-bar-pour-nathan">
                  <div id="menu-nav">
                    <div id="navigation-bar">
                      <ul className="pl-0" >
                        <li><Link to="/question-au-rav" onClick={this.toggleCollapseMobile} >Question au rav</Link></li>
                        <li><Link to="/video" onClick={this.toggleCollapseMobile} >shiourims</Link></li>
                        <li><Link to="/beit-din" onClick={this.toggleCollapseMobile}>beit din</Link></li>
                        <li><Link to="/horaire" onClick={this.toggleCollapseMobile} >Horaire</Link></li>
                        <li><Link to="/dons" onClick={this.toggleCollapseMobile} >Dons</Link></li>
                        <li><Link to="/nous-contacter" onClick={this.toggleCollapseMobile} >Nous contacter</Link></li>
                        <li><Link to="/nous-decouvrire" onClick={this.toggleCollapseMobile}  >Nous decouvrire</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
    );
  }
}




export default withStyles(styles)(Navigation);