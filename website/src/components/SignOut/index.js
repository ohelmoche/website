import React from 'react';


// import {
//   MDBIcon
// } from "mdbreact";

const SignOutButton = ({ firebase }) => (
  // <div  onClick={firebase.doSignOut} >Sign Out</div>
  // <MDBBtn color="primary" onClick={firebase.doSignOut}  rounded>Primary</MDBBtn>
  <div  onClick={firebase.doSignOut} className="d-none d-md-inline">Sign Out</div>
);




export default SignOutButton
