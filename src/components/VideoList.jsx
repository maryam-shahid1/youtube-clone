import React from 'react'
import Video from './Video'
import '../index.css'

const VideoList = ({ data, onVideoSelected }) => {
    return (
        <div className='video-list'>
            <h4>Recommended Videos</h4>
            <div className='video-list-container'>
                <Video data={data} onVideoSelected={onVideoSelected} />
            </div>
        </div >
    )
}

export default VideoList

