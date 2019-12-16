import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../../services/firebase';


import Signup from './Signup'

import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  isLoading: false
};



class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.setState({ isLoading : true })
    console.log('1')
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        if (this._isMounted === true) {
          this.setState({ ...INITIAL_STATE });
        }
        console.log('2')
        this.setState({ isLoading : false })    
        this.props.history.push('/');
      })
      .catch(error => {
        if (this._isMounted === true) {
          console.log(error)
          this.setState({ isLoading : false })
        }
        console.log('error')
        
        if (error.message !== undefined) {
          console.log(error.message)
          this.setState({ isLoading : false })
        }
      })


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
          <MDBCol md="6" lg="5" className="mx-auto float-none white z-depth-1 ">
            <Signup passwordTwo={passwordTwo} username={username} passwordOne={passwordOne} email={email} changeHandler={this.onChange} onSubmit={this.onSubmit} isLoading={isLoading} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const SignUpLink = () => (
  <p>
    Vous avez pas de compte ? <Link to={'/sign-up'}>S'enregister</Link>
  </p>
);


export { SignUpLink };

export default withFirebase(SignUpFormBase)