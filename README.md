# YouTube Clone React App

## Description
This is a simple YouTube clone React application that uses the Google YouTube Search API to search for videos based on user input. The app displays search results and allows users to select a video to play on the left side, just like YouTube. It leverages CSS for styling to mimic the appearance of YouTube.

## Features
- Search for YouTube videos by entering a query in the search input.
- Display search results in a list.
- Select and play a video on the left side.

## Technologies Used
- React.js
- Google YouTube Search API
- CSS for styling

## Setup and Installation
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/maryam-shahid1/youtube-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd youtube-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Obtain API Key:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Enable the "YouTube Data API v3" for your project.
   - Create credentials and obtain an API key.

5. Configure API Key:
   - Create a `.env` file in the project root directory.
   - Add your API key to the `.env` file:

     ```plaintext
     API_KEY=your-api-key-here
     ```

6. Start the development server:

   ```bash
   npm start
   ```

7. Open your web browser and access the app at [http://localhost:3000](http://localhost:3000).

## Usage
1. Enter a search query in the search input field and press Enter or click the search button.
2. The app will fetch and display search results from YouTube.
3. Click on a video from the search results to play it on the left side.
4. Enjoy watching the selected video!
