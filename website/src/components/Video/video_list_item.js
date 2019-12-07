import React from 'react'

const VideoListItem = (props) => {
    const video = props.video
    //console.log(video)
    const imageUrl = video.snippet.thumbnails.default.url
    return(
        <li onClick={() => props.onUserSelected(video)} className="list-group-item list-group-item-action">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt={imageUrl}/>
                </div>
                <div className="media-body">
                    <p className="media-heading">{video.snippet.title}</p>
                </div>
            </div>
        </li>
    )
}

export default  VideoListItem