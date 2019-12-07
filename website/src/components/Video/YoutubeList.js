import React from 'react'
import VideoListItem from './video_list_item'
import { MDBContainer } from "mdbreact";

const YoutubeList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
                <VideoListItem
                    onUserSelected={props.onVideoSelect}
                    key={video.etag}
                    video={video} />
        );
    });


    return (
        <MDBContainer>
                {videoItems}
        </MDBContainer>
    )
}

export default YoutubeList;