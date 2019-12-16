import React from "react";
import { MDBModalFooter, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
//import './Signin.css'

import { SignUpLink } from '../SignUp';
// import { PasswordForgetLink } from '../PasswordForget';



const FormPage = ({ onChange, password, email, onSubmit, handleGoogleSingIn, handleFacebookSingIn, handleTwitterSingIn, isLoading }) => {
  return (
    <>
      <MDBCardBody className="mx-2">
        <div className="text-center">
          <h3 className="dark-grey-text mb-5">
            <p>Se connecter</p>
          </h3>
        </div>
        <MDBInput
          label="Votre email"
          group
          value={email}
          onChange={onChange}
          type="email"
          name="email"
          validate
          error="wrong"
          success="right"
        />
        <MDBInput
          label="Votre mot de passe"
          group
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          validate
          containerClass="mb-0"
        />
        {/* <PasswordForgetLink /> */}
        <div className="d-flex align-items-center">
          <MDBBtn
            type="button"
            gradient="lighten-1"
            rounded
            onClick={onSubmit}
            className="btn-block"
            style={{ textTransform: 'none' }}
          >
            {
              isLoading === false ?
                <span className='' >Se connecter</span>
                :
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            }
          </MDBBtn>
        </div>
        <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-3">
          ou S'enregistrer avec :
                   </p>
        <div className="row my-3 d-flex justify-content-center">
          <MDBBtn
            type="button"
            color="white"
            onClick={handleFacebookSingIn}
            rounded
            className="mr-md-3 z-depth-1a"

          >
            <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
          </MDBBtn>
          <MDBBtn
            type="button"
            color="white"
            onClick={handleTwitterSingIn}
            rounded
            className="mr-md-3 z-depth-1a"
          >
            <MDBIcon fab icon="twitter" className="blue-text" />
          </MDBBtn>
          <MDBBtn
            type="button"
            color="white"
            onClick={handleGoogleSingIn}
            rounded
            className="z-depth-1a"
          >
            <MDBIcon fab icon="google-plus-g" className="blue-text" />
          </MDBBtn>
        </div>
      </MDBCardBody>
      <MDBModalFooter className="mx-5 pt-3 mb-1">
        <SignUpLink />
      </MDBModalFooter>
    </>
  );
};

export default FormPage;