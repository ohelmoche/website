import React from 'react';
import { MDBModal } from 'mdbreact';

//import YouTube from 'react-youtube';

export default function ModalPhoto({ open, handleModal, img }) {


    // const opts = {
    //     width: '100%',
    //     playerVars: { 
    //       autoplay: 1
    //     }
    //   }

    return (
        <MDBModal isOpen={open} size="lg" toggle={handleModal} centered>
            <img
                src={img}
                className="img-thumbnail "
                alt=""
            />
            {/* <YouTube
                className="pt-1 pl-1 pr-1 "
                videoId={'FhmWFUoTLok'}
                opts={opts}
                onReady={(event) =>  event.target.stopVideo(-1)}
            /> */}
        </MDBModal>
    );
}

