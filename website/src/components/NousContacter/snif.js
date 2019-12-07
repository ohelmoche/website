import React from 'react'
import { MDBContainer,  MDBCardHeader, MDBCol} from "mdbreact"



const Snif = ({name, adresse, telephone, mail, coordinate}) => (
    
    <MDBContainer>
        <MDBCardHeader className="font-weight-bold justify-content-between text-dark bg-white">
            {name}
        </MDBCardHeader >
        <MDBCol className="ml-0 justify-content-between">
            Adresse: 
            <a
                href={`https://waze.com/ul?sd=${coordinate}&navigate=yes`}
                target="_blank"
                rel="noopener noreferrer">
                {" " + adresse}
            </a>
        </MDBCol>
        <MDBCol>
            Mail:
            <a
                href={`mailto:${mail}`}
            >
                {" " +mail}
            </a>
        </MDBCol>
        <MDBCol>
            Telephone: {telephone}
        </MDBCol>

    </MDBContainer>
)

   


export default Snif;