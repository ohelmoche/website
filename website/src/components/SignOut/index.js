import React from 'react';
import { withFirebase } from '../../services/firebase';

// import {
//   MDBIcon
// } from "mdbreact";

const SignOutButton = ({ firebase }) => (
  // <div  onClick={firebase.doSignOut} >Sign Out</div>
  // <MDBBtn color="primary" onClick={firebase.doSignOut}  rounded>Primary</MDBBtn>
  <div  onClick={firebase.doSignOut} className="d-none d-md-inline text-dark">Se deconnecter</div>
);




export default withFirebase(SignOutButton)
