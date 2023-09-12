import React from 'react'
import '../index.css'

function selectVideo(videoIdObj, onVideoSelected) {
    onVideoSelected(videoIdObj.videoId)
}

function getThumbnail(imageurl) {
    const thumbnail = {
        backgroundImage: `url(${imageurl})`
    }
    return thumbnail;
}

function constructVideoTitles(videosData, onVideoSelected) {
    return videosData.map(({ snippet, id }, index) => {
        return (
            <div className='video-container' >
                <div className='video' key={index} onClick={() => selectVideo(id, onVideoSelected)}>
                    <div className='thumbnail' style={getThumbnail(snippet.thumbnails.high.url)} key={index}></div>
                    <p className='title'>{snippet.title}</p>
                </div>
            </div>

        )
    })
}

const Video = ({ data, onVideoSelected }) => {
    return (
        <div>
            {constructVideoTitles(data, onVideoSelected)}
        </div>
    )
}

export default Video

