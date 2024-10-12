# Video Streaming App
A responsive video streaming application built using React and Material-UI. The app allows users to search for videos, view video details, and explore related content.

## Table of Contents
- Technologies Used
- Requirements
- Setup and Installation
- Usage
- Contributing

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Vite: A modern frontend build tool for faster development and optimized builds.
- Material-UI: A popular React UI framework for building responsive layouts.
- React Router: For handling routing within the application.
- Axios: For making API calls (if used).
- YouTube Data API: To fetch video details and related content.
- React Player: For embedding and playing YouTube videos.
- RapidAPI: To manage API requests and access the YouTube Data API seamlessly

## Requirements
- Node.js: Version 14 or higher.
- npm: Version 5.6 or higher (comes with Node.js).
- A valid YouTube Data API key from RapidAPI: To fetch video data.

## Setup and Installation
1. Clone the repository:

````bash
git clone https://github.com/yourusername/video-streaming-app.git
cd video-streaming-app
````
2. Install dependencies:

````bash
npm install
````

3. Create a .env file in the root of the project and add your YouTube Data API key:

````makefile
VITE_RAPID_API_KEY=your_api_key_here
````

4.Start the development server:
````bash
npm run dev
````
5. Open your browser and go to http://localhost:5173 to view the application.

## Usage
- Navigate through the application using the navigation bar.
- Use the search bar to find videos by keywords.
- Click on a video to view its details, including the video player, channel information, view count, and related videos.

## Contributing
Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch.
5. Create a pull request.