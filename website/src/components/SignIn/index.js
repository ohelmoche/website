import React, { Component } from 'react';


import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

import SingIn from './SignIn'
import Notification from '../Notification'

import { withFirebase } from '../../services/firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  errors: {
    password: '',
    email: '',
  },
  openNotificationError: false,
  isLoading: false
};

class SignInFormBase extends Component {

  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.props.firebase.doSignOut()
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  onSubmit = async (event) => {

    if (this.validateForm()) {
      this._isMounted  && this.setState({ isLoading: true })
      const { email, password } = this.state;
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then((result) => {
          if (this._isMounted === true) {
            this._isMounted  && this.setState({ ...INITIAL_STATE });
          }
          this._isMounted  && this.setState({ isLoading: false })
          this.props.history.push('/');
        })
        .catch(error => {
          if (error.message !== undefined) {
            this._isMounted  &&  this.setState({ isLoading: false, error: error.message, openNotificationError: true })
          }else{
            this._isMounted  &&  this.setState({ isLoading: false, error: error , openNotificationError: true })
          }
        })
    } else {

    }

  }




  handleGoogleSingIn = event => {
    this._isMounted  &&  this.setState({ isLoading: true })
    this.props.firebase
      .doSignInWithGoogle()
      // .then(socialAuthUser => {
      //   // Create a user in your Firebase Realtime Database too
      //   return this.props.firebase
      //     .user(socialAuthUser.user.uid)
      //     .set({
      //       username: socialAuthUser.user.displayName,
      //       email: socialAuthUser.user.email,
      //       roles: {},
      //     });
      // })
      .then(() => {
        this._isMounted  && this.setState({ isLoading: false })
        this.props.history.push('/');
      })
      .catch(error => {
          if (error.message !== undefined) {
            this._isMounted  && this.setState({ isLoading: false, error: error.message, openNotificationError: true })
          }else{
            this._isMounted  && this.setState({ isLoading: false, error: error , openNotificationError: true })
          }
        })
      }
  

  validateForm = () => {
    let valid = true;
    const { email, password, errors } = this.state
    email.length < 1 && password.length < 1 && (valid = false)
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }




  onChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'password':
        errors.password =
          value.length < 6
            ? 'Password must be 6 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validateEmail(value)
            ? ''
            : 'Email n\'est pas vlide!';
        break;
      default:
        break;
    }
    this._isMounted && this.setState({ errors, [name]: value }, () => {
     // console.log(errors)
    })
  };

  render() {
    const { email, password, errors, isLoading } = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" lg="5" className="mx-auto float-none white z-depth-1 ">

            <SingIn password={password} email={email} onChange={this.onChange} onSubmit={this.onSubmit} isLoading={isLoading}
              handleGoogleSingIn={this.handleGoogleSingIn} errors={errors} />
          </MDBCol>
        </MDBRow>
        <Notification handleClose={() => { this.setState({ openNotificationError: false }) }} open={this.state.openNotificationError} message={this.state.error} variant={"error"} />

      </MDBContainer>
    )
  }

}

function validateEmail(email) {
  // eslint-disable-next-line 
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


export default withFirebase(SignInFormBase)