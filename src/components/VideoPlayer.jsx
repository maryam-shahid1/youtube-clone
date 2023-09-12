import React from "react";
import "../index.css";

const VideoPlayer = ({ videoId, data }) => {
    if (!videoId) {
        return <p>Search for a video</p>;
    }

    const video = data.find((item) => item.id.videoId === videoId);

    if (!video) {
        return <p>Video not found</p>;
    }

    return (
        <div className="video-player">
            <iframe
                title={videoId}
                className="video-iframe"
                src={`https://www.youtube.com/embed/${videoId}`}
            ></iframe>
            <h3>{video.snippet.title}</h3>

            <div className="details-container">
                <img
                    width="40px"
                    height="40px"
                    className="channel-photo"
                    src={
                        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png"
                    }
                ></img>
                <h5 className="channel-title"> {video.snippet.channelTitle}</h5>
            </div>
            <p className="channel-description">{video.snippet.description}</p>
        </div>
    );
};

export default VideoPlayer;

