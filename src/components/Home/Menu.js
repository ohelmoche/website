
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
    MDBAnimation,
    MDBNavLink
} from "mdbreact";


const Menu = ({ scrollToTop }) => (
    <>


        <MDBRow id="categories">
            <MDBCol md="4">
                <MDBAnimation reveal type="fadeInLeft">
                    <MDBNavLink
                        to="/question-au-rav"
                        onClick={scrollToTop}
                    >
                        <MDBCard cascade className="my-3 grey lighten-4">
                            <MDBCardImage
                                cascade
                                className="img-fluid"
                                src="https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"
                            />
                            <MDBCardBody cascade className="text-center">
                                <MDBCardTitle>

                                    <MDBIcon icon="question" className="grey lighten-4 pr-2" />
                                    Question au rav
    
    
                                </MDBCardTitle>
                                <MDBCardText>
                                    Ready-to-use components that you can use in your
                                    applications. Both basic and extended versions!
                              </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBNavLink>
                </MDBAnimation>
            </MDBCol>

            <MDBCol md="4">
                <MDBAnimation reveal type="fadeInDown">
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
                            <MDBCardBody cascade className="text-center">
                                <MDBCardTitle>
                                    <MDBIcon fab icon="youtube" className="grey lighten-4 pr-2" />
                                    Video
                                 </MDBCardTitle>
                                <MDBCardText >
                                    Basic and advanced tables. Responsive, datatables,
                                        with sorting, searching and export to csv.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBNavLink>
                </MDBAnimation>
            </MDBCol>

            <MDBCol md="4">
                <MDBAnimation reveal type="fadeInRight">
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
                            <MDBCardBody cascade className="text-center">
                                <MDBCardTitle>

                                    <MDBIcon icon="gavel" className="grey lighten-4 pr-2" />
                                    Beit din
                            </MDBCardTitle>
                                <MDBCardText>
                                    Advanced components such as charts, carousels,
                                    tooltips and popovers. All in Material Design
                                    version.
                             </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBNavLink>
                </MDBAnimation>
            </MDBCol>
        </MDBRow>


        <MDBRow id="categories">
            <MDBCol md="4">
                <MDBAnimation reveal type="fadeInLeft">
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
                            <MDBCardBody cascade className="text-center">
                                <MDBCardTitle>

                                    <MDBIcon
                                        icon="clock"
                                        className=" pr-2"
                                    />
                                    Horaire
                                 </MDBCardTitle>
                                <MDBCardText>
                                    AAAnimations, colours, shadows, skins and many more!
                                    Get to know all our css styles in one place.
                                </MDBCardText>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBNavLink>
                </MDBAnimation>
            </MDBCol>

            <MDBCol md="4">
                <MDBAnimation reveal type="fadeInDown">
                    <MDBNavLink
                        to="/beraha-gdolim"

                        onClick={scrollToTop}
                    >
                        <MDBCard cascade className="my-3 grey lighten-4">
                            <MDBCardImage
                                cascade
                                className="img-fluid"
                                src="https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"
                            />
                            <MDBCardBody cascade className="text-center">
                                <MDBCardTitle>
                                    <MDBIcon icon='star-of-david' className="grey lighten-4 pr-2" />
                                    Beraha des gdolims
                                 </MDBCardTitle>
                                <MDBCardText>
                                    Basic and advanced tables. Responsive, datatables,
                                        with sorting, searching and export to csv.
                                 </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBNavLink>
                </MDBAnimation>
            </MDBCol>

            <MDBCol md="4">
                <MDBAnimation reveal type="fadeInRight">
                    <MDBNavLink
                        to="/nous-contacter"
                        onClick={scrollToTop}
                    >
                        <MDBCard cascade className="my-3 grey lighten-4">
                            <MDBCardImage
                                cascade
                                className="img-fluid"
                                src="https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"
                            />
                            <MDBCardBody cascade className="text-center">
                                <MDBCardTitle>
                                    <MDBIcon icon="at" className="grey lighten-4 pr-2" />
                                    Nous contacter
                                 </MDBCardTitle>
                                <MDBCardText>
                                    Basic and advanced tables. Responsive, datatables,
                                    with sorting, searching and export to csv.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBNavLink>
                </MDBAnimation>
            </MDBCol>
        </MDBRow>
    </>
);



export default Menu
