import React from 'react'
import { MDBMedia } from "mdbreact"



const Comentaires = ({ username, commentaire }) => (
    <MDBMedia
        style={{ backgroundColor: '#f5f5f5' }}
        className="d-block d-md-flex mt-4 img-thumbnail"> 
        <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
            <h5 className="font-weight-bold mt-0">
                {username}
            </h5>
            {commentaire}
        </MDBMedia>
    </MDBMedia>

)




export default Comentaires;