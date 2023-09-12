import './App.css';
import { Navbar, Feed } from './components';
import youtubeApi from '../src/api/youtube';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';


class App extends React.Component {
  state = {
    videoMetaInfo: [],
    selectedVideo: null,
  };

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideo: videoId
    })
  }

  onSearch = async (keyword) => {
    try {
      const response = await youtubeApi.get('/search', {
        params: {
          q: keyword,
        },
      });

      this.setState({
        videoMetaInfo: response.data.items,
        selectedVideo: response.data.items[0].id.videoId
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Box>
            <Navbar
              videoMetaInfo={this.state.videoMetaInfo}
              onSearch={this.onSearch}
            />
            <Feed
              videoMetaInfo={this.state.videoMetaInfo}
              videoId={this.state.selectedVideo}
              onVideoSelected={this.onVideoSelected}
            />
          </Box>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

