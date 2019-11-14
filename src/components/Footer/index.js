
import React  from "react";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const path = 'http://localhost:3000'

const Footer = ( ) =>{
    return(
        <MDBFooter color="brown lighten-1" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="4">
                <h5 className="title">Ohel Moche</h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </MDBCol>
              <MDBCol md="4">
                <ul>
                  <li className="list-unstyled">
                    <a href={path + '/question-au-rav'}>Question au rav</a>
                  </li>
                  <li className="list-unstyled">
                    <a href={path + '/video'}>Video</a>
                  </li>
                  <li className="list-unstyled">
                    <a href={path + '/beit-din'}>Beit Din</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="4">
                <ul>
                  <li className="list-unstyled">
                    <a href={path + '/beraha-gdolim'}>Beraha Gdolim</a>
                  </li>
                  <li className="list-unstyled">
                    <a href={path + '/horaire'}>Horaire</a>
                  </li>
                  <li className="list-unstyled">
                    <a href={path + '/nous-contacter'}>Mous Contacter</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright {" "}
              <a href={path} >hoelmoche.co.il</a>
            </MDBContainer>
          </div>
        </MDBFooter>
    )
}

export default Footer