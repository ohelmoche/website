import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../../services/firebase';

import Notification from '../Notification'

import Signup from './Signup'

import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

const INITIAL_STATE = {
  username: '',
  email: '',
  errors: {
    passwordOne: '',
    passwordTwo: '',
    email: '',
    username: ''
  },
  passwordOne: '',
  passwordTwo: '',
  error: null,
  isLoading: false,
  openNotificationError: false
};



class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }


  createUser = (user) => {
    let addMessage = this.props.firebase.callFunctionFirebase('createNewUser')
    addMessage(user)
      .then((result) => {
        // Read result of the Cloud Function.
        //var sanitizedMessage = result.data.text;
        this.setState({ ...INITIAL_STATE });
        this.setState({ isLoading: false })
        this.props.history.push('/');
      }).catch((error) => {
        // Getting the Error details.
        // var code = error.code;
        // var message = error.message;
        // var details = error.details;
        // ...
        console.log(error)
      });
  }

  onSubmit = event => {
    if (this.validateForm()) {
      const { email, passwordTwo, username } = this.state;
      this.setState({ isLoading: true })
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordTwo)
        .then((user) => {

          // this.createUser({
          //   displayName: username,
          //   email: email,
          //   level: 'basic'
          // })

          this.props.firebase.users().doc(user.uid).set({
            displayName: username,
            email: email,
            level: 'basic'
          })
            .then(() => {
              if (this._isMounted === true) {
                this.setState({ ...INITIAL_STATE });
              }
              this.setState({ isLoading: false })
              this.props.history.push('/');
            }).catch(function (error) {
              console.log(error)
              this.setState({ isLoading: false, error, openNotificationError: true })
            });


        })
        .catch(error => {
          if (this._isMounted === true) {
            console.log(error)
            this.setState({ isLoading: false, error, openNotificationError: true })
          }
          if (error.message !== undefined) {
            console.log(error.message)
            this.setState({ isLoading: false, error: error.message, openNotificationError: true })
          }
        })

      event.preventDefault();
    } else {
      this.setState({ error: 'le mot de passe ou un des chants est incorrect !', openNotificationError: true })
    }
  };

  validateForm = () => {
    let valid = true;
    const { email, passwordOne, passwordTwo, username, errors } = this.state
    if (email.length < 1 || passwordOne.length < 1 || passwordTwo.length < 1 || username.length < 1) {
      (valid = false)
    }
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  onChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'passwordOne':
        errors.passwordOne =
          value.length < 6
            ? 'Password must be 6 characters long!'
            : '';
        break;
      case 'passwordTwo':
        errors.passwordTwo =
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
      case 'username':
        errors.username =
          value.length < 5
            ? 'nom n\'est pas vlide must be 6 characters long!'
            : ''
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      // console.log(errors)
    })
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isLoading,
      errors
    } = this.state;


    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" lg="5" className="mx-auto float-none white z-depth-1 ">
            <Signup passwordTwo={passwordTwo} username={username} passwordOne={passwordOne} email={email} errors={errors}
              changeHandler={this.onChange} onSubmit={this.onSubmit} isLoading={isLoading} />
          </MDBCol>
        </MDBRow>
        <Notification handleClose={() => { this.setState({ openNotificationError: false }) }} open={this.state.openNotificationError} message={this.state.error} variant={"error"} />
      </MDBContainer>
    );
  }
}

const SignUpLink = () => (
  <p>
    Vous avez pas de compte ? <Link to={'/sign-up'}>S'enregister</Link>
  </p>
);

function validateEmail(email) {
  // eslint-disable-next-line 
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


export { SignUpLink };

export default withFirebase(SignUpFormBase)