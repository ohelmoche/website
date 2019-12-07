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

  const videoID = video.id.videoId;
  const titre = video.snippet.title;

  return (
    <MDBContainer>
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
          <div>{video.snippet.description}</div>
        </MDBContainer>
      </MDBRow>
    </MDBContainer>
  )
}

export default YoutubePlayer