
import React from 'react';

import {
    MDBCol,
    
    MDBCardBody,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBNavLink
} from "mdbreact";


const VideoCard = ({ style, tscrollToTop, link, title, description, icon, image }) => (
    <MDBCol md="4"  className="p-1 m-0 "  > 
        <MDBNavLink
            to={link}
            onClick={tscrollToTop}
            className="p-0 m-0"
        >
            <MDBCard cascade className=" grey lighten-4 p-0 m-0 "  >
                <MDBCardImage
                    cascade
                    className="img-fluid "
                    src={image || "https://www.myjewishlearning.com/wp-content/uploads/2003/02/torah-scroll.jpg"}
                />
                <MDBCardBody cascade className={style} >
                    <MDBCardTitle style={{ margin: 0  }} >
                        <MDBIcon
                            icon={icon}
                            className=" pr-2"
                        />
                        {title}
                    </MDBCardTitle>
                    <MDBCardText className="text-black">
                        {description}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBNavLink>
    </MDBCol>
)


export default VideoCard