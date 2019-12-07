import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Signup from './Signup'

import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  isLoading : false 
};



class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isLoading
    } = this.state;


    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" lg="5" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <Signup passwordTwo={passwordTwo} username={username} passwordOne={passwordOne} email={email} changeHandler={this.onChange} onSubmit={this.onSubmit} isLoading={isLoading} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={'/sign-up'}>Sign Up</Link>
  </p>
);


export { SignUpLink };

export default SignUpFormBase

