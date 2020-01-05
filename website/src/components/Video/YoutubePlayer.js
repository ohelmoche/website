import React from 'react'
import YouTube from 'react-youtube';
import { MDBContainer, MDBRow } from "mdbreact";

function videoOnReady(event) {
  // access to player in all event handlers via event.target
  event.target.stopVideo(-1)

}

function _onPlay(event) {
}

const YoutubePlayer = ({ video }) => {

  if (!video) {
    return <div>Loading...</div>
  }
  const opts = {
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  const videoID = video.videoId;
  const titre = video.title;

  return (
    <MDBContainer className ="m-0 p-0">
      <MDBRow>
      <MDBContainer>
        <YouTube
          videoId={videoID}
          opts={opts}
          onReady={videoOnReady}
          onPlay={_onPlay}
        />
        </MDBContainer>
      </MDBRow>
      <MDBRow>
        <MDBContainer>
          <div>{titre}</div>
        </MDBContainer>
      </MDBRow>
    </MDBContainer>
  )
}

export default YoutubePlayer