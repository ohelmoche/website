
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
        <MDBRow id="categories" className="p-0 m-0">
            <CardMenu icon={"question"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/question-au-rav"} title={"Question au rav"} description={"Ready-to-use components that you can use in your"} />
            <CardMenu icon={"video"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/video"} title={"Shiourim"} description={"Ready-to-use components that you can use in your"} />
            <CardMenu icon={"gavel"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/beit-din"} title={"Beit din"} description={"Ready-to-use components that you can use in your"} />
            <CardMenu icon={"donate"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/dons"} title={"Dons"} description={"Ready-to-use components that you can use in your"} />
     
            <CardMenu icon={"address-book"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/nous-contacter"} title={"Contacter"} description={"Ready-to-use components that you can use in your"} />
            <CardMenu icon={"photo-video"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/nous-decouvrire"} title={"Decouvrir"} description={"Ready-to-use components that you can use in your"} />
            <CardMenu icon={"clock"} style={classes.bodyCardMenu} scrollToTop={scrollToTop} link={"/horaire"} title={"Horaire"} description={"Ready-to-use components that you can use in your"} />
        </MDBRow>

    </>
);


const CardMenu = ({ style, tscrollToTop, link, title, description, icon }) => (
    <MDBCol md="3" className="p-1 m-0 "  >
        <MDBNavLink
            to={link}
            onClick={tscrollToTop}
            className="p-0 m-0"
        >
            <MDBCard cascade className=" grey lighten-4 p-0 m-0 "  >
                <MDBCardImage
                    cascade
                    className="img-fluid "
                    src={require('../../assets/img/torah-scroll.jpg')}
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
