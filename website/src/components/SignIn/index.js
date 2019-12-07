import React, { Component } from 'react';


import { MDBContainer , MDBCol, MDBRow } from 'mdbreact';

import SingIn from './SignIn'



const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  isLoading : false 
};

class SignInFormBase extends Component {

  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  onSubmit = async (event) => {
    

   


    event.preventDefault();
  }

  handleGoogleSingIn = event => {
    this.setState({ isLoading : true })
    
    event.preventDefault();
  }

  handleFacebookSingIn = event => {
    this.setState({ isLoading : true })
    
    event.preventDefault();
  };

  handleTwitterSingIn = event => {
    this.setState({ isLoading : true })
    
    
    event.preventDefault();
  };


  onChange = event => {
    if (this._isMounted === true) {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    const { email, password, error , isLoading } = this.state;
    if (error !== '')
      console.log(error)
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" lg="5" className="mx-auto float-none white z-depth-1 py-2 px-2">

              <SingIn password={password} email={email} onChange={this.onChange} onSubmit={this.onSubmit} isLoading={isLoading}
                handleFacebookSingIn={this.handleFacebookSingIn} handleTwitterSingIn={this.handleTwitterSingIn} handleGoogleSingIn={this.handleGoogleSingIn} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }

}


export default SignInFormBase

