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
                <Stack sx={{ flexDirection: { xs: "column", md: "row" }, height:{xs:'160vh', md: "100vh" }}}>
                    <Box
                        sx={{
                            height: "100%",
                            maxWidth: "100%",
                            px: { xs: 0, md: 2 },
                            overflowY: { xs:'none', md: 'auto'},
                            overflowX:{xs:'auto', md:'none'},
                            flexDirection: { xs: "column", md: "row" }, height: "100vh"
                        }}
                    >
                        <Sidebar />
                    </Box>
                    <Box
                        p={2}
                        sx={{
                            width: {md: "80%"},
                            overflowY: {md:"auto"},
                            flex: {md:2},
                            overflowX: {md: "none"},
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
                            flexDirection: 'column',
                            justifyContent: {md: "center"},
                            marginLeft:{xs:'59px', md:'0px'},
                            width: {xs:"100%", md: "20%"},
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

