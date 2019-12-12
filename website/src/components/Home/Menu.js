
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
            <CardMenu icon={"question"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/question-au-rav"} title={"Question au rav"} description={"Ready-to-use components that you can use in your"} />
            <CardMenu icon={"video"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/video"} title={"Video"} description={"Ready-to-use components that you can use in your"} />
            <CardMenu icon={"gavel"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/beit-din"} title={"Beit din"} description={"Ready-to-use components that you can use in your"} />
        </MDBRow>

        <MDBRow id="categories">
            <CardMenu icon={"clock"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/horaire"} title={"Horaire"} description={"Ready-to-use components that you can use in your"} />
            <CardMenu icon={"clock"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/nous-contacter"} title={"Nous Contacter"} description={"Ready-to-use components that you can use in your"} />
        </MDBRow>
    </>
);


const CardMenu = ({ style, tscrollToTop, link, title, description, icon }) => (
    <MDBCol md="4">
        <MDBNavLink
            to={link}
            onClick={tscrollToTop}
        >
            <MDBCard cascade className="my-3 grey lighten-4">
                <MDBCardImage
                    cascade
                    className="img-fluid "
                    src="https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"
                />
                <MDBCardBody cascade className={style} >
                    <MDBCardTitle style={{ margin: 0 }}>
                        <MDBIcon
                            icon={icon}
                            className=" pr-2"
                        />
                        {title}
                    </MDBCardTitle>
                    <MDBCardText className="text-white">
                        {description}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBNavLink>
    </MDBCol>
)


export default Menu
