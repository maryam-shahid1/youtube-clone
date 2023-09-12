import React from "react";
import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import "../index.css";

class Feed extends React.Component {

    render() {
        return (
            <div>
                <Stack sx={{ flexDirection: { xs: "column", md: "row" }, height: "100vh" }}>
                    <Box
                        sx={{
                            height: "100%",
                            width: "10%",
                            px: { xs: 0, md: 2 },
                            overflowY: "auto",
                        }}
                    >
                        <Sidebar />
                    </Box>
                    <Box
                        p={2}
                        sx={{
                            width: "80%",
                            overflowY: "auto",
                            flex: 2,
                            overflowX: "none",
                        }}
                    >
                        <VideoPlayer
                            videoId={this.props.videoId}
                            data={this.props.videoMetaInfo}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "20%",
                            overflowY: "auto",
                        }}
                    >
                        <VideoList
                            data={this.props.videoMetaInfo}
                            onVideoSelected={this.props.onVideoSelected}
                        />
                    </Box>
                </Stack>
            </div>
        );
    }
}

export default Feed;

