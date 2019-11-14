import React from 'react';
import { MDBContainer, MDBRow , MDBCol } from "mdbreact";


import DatePicker from './DatePicker'




const Horaire = () => (
  <MDBContainer>
    <MDBRow>
      <MDBCol className="mt-3" md="6">
        <DatePicker />
      </MDBCol>
      <MDBCol className="mt-3" md="6">
        <DatePicker />
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol className="mt-3" md="6">
        <DatePicker />
      </MDBCol>
      <MDBCol className="mt-3" md="6">
        <DatePicker />
      </MDBCol>
    </MDBRow>
   
  </MDBContainer>
);



export default Horaire
