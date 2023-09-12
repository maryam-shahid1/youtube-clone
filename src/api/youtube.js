import axios from 'axios'
require('dotenv').config();

const API_KEY = process.env.API_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: API_KEY,
    },
    header: {}
})
