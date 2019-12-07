
import React from 'react';

import {
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBNavLink
} from "mdbreact";


const Menu = ({ scrollToTop, classes }) => (
    <>


        <MDBRow id="categories">
            <MDBCol md="4">

                <MDBNavLink
                    to="/question-au-rav"
                    onClick={scrollToTop}
                >
                    <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                            cascade top
                            className={classes.imageCard}
                            src="https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"
                        />
                        <MDBCardBody cascade className={classes.bodyCardMenu} >
                            <MDBCardTitle style={{margin: 0}}>
                                <MDBIcon icon="question" className=" lighten-4 pr-2" />
                                Question au rav
                                </MDBCardTitle>
                            <MDBCardText className="text-white">
                                Ready-to-use components that you can use in your
                              </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBNavLink>
            </MDBCol>

            <MDBCol md="4">
                <MDBNavLink
                    to="/video"
                    onClick={scrollToTop}
                >
                    <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                            cascade
                            className="img-fluid"
                            src="https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"
                        />
                        <MDBCardBody cascade className={classes.bodyCardMenu} >
                            <MDBCardTitle style={{margin: 0}}>
                                <MDBIcon fab icon="youtube" className=" lighten-4 pr-2" />
                                Video
                                 </MDBCardTitle>
                            <MDBCardText className="text-white">
                                Ready-to-use components that you can use in your
                                </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBNavLink>
            </MDBCol>

            <MDBCol md="4">
                <MDBNavLink
                    to="/beit-din"
                    onClick={scrollToTop}
                >
                    <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                            cascade
                            className="img-fluid"
                            src="https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"
                        />
                        <MDBCardBody cascade className={classes.bodyCardMenu} >
                            <MDBCardTitle style={{margin: 0}}>

                                <MDBIcon icon="gavel" className=" lighten-4 pr-2" />
                                Beit din
                            </MDBCardTitle>
                            <MDBCardText className="text-white">
                                Ready-to-use components that you can use in your
                             </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBNavLink>
            </MDBCol>
        </MDBRow>


        <MDBRow id="categories">
            <MDBCol md="4">

                <MDBNavLink
                    to="/horaire"
                    onClick={scrollToTop}
                >
                    <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                            cascade
                            className="img-fluid"
                            src="https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"
                        />
                        <MDBCardBody cascade className={classes.bodyCardMenu} >
                            <MDBCardTitle style={{margin: 0}}>

                                <MDBIcon
                                    icon="clock"
                                    className=" pr-2"
                                />
                                Horaire
                                 </MDBCardTitle>
                            <MDBCardText className="text-white">
                                Ready-to-use components that you can use in your
                                </MDBCardText>

                        </MDBCardBody>
                    </MDBCard>
                </MDBNavLink>
            </MDBCol>

            <MDBCol md="4">
                <MDBNavLink
                    to="/nous-contacter"
                    onClick={scrollToTop}
                >
                    <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                                cascade
                                className="img-fluid "
                                src="https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"
                            />
                        <MDBCardBody cascade className={classes.bodyCardMenu} >
                            <MDBCardTitle style={{margin: 0}}>
                                <MDBIcon
                                    icon="clock"
                                    className=" pr-2"
                                />
                                Horaire
                            </MDBCardTitle>
                            <MDBCardText className="text-white">
                                Ready-to-use components that you can use in your
                                </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBNavLink>
            </MDBCol>
        </MDBRow>
    </>
);



export default Menu
