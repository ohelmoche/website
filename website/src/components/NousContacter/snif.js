import React from 'react'
import { MDBContainer,  MDBCardHeader, MDBCol ,MDBIcon} from "mdbreact"



const Snif = ({name, adresse, telephone, mail, coordinate}) => (
    
    <MDBContainer>
        <MDBCardHeader className="pl-0 font-weight-bold justify-content-between text-dark bg-white ">
           <p className="font-weight-bold  text-center m-0"  > {name} </p>
        </MDBCardHeader >
        <MDBCol className="p-0 mt-2">
            <span className="font-weight-bold mr-2"> Adresse </span>
            <a
                href={`https://waze.com/ul?sd=${coordinate}&navigate=yes`}
                target="_blank"
                rel="noopener noreferrer">
                {" " + adresse}
            </a>
            <MDBIcon fab icon="waze" className="ml-2"/>
        </MDBCol>
        <MDBCol className="p-0">
            <span className="font-weight-bold mr-2"> Mail </span>
            <a
                href={`mailto:${mail}`}
            >
                {" " +mail}
            </a>
        </MDBCol>
        <MDBCol className="p-0">
            <span className="font-weight-bold mr-2"> Telephone </span>
            {telephone}
        </MDBCol>
    </MDBContainer>
    
)

   


export default Snif;