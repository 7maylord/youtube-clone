import axios from 'axios';

// Base URL for the YouTube API
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// Configuration options for the API request
const options = {
  params: {
    maxResults: 50, // Maximum number of results to return
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY, // Your API key from environment variables
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com', // Host for the API
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for further handling
  }
};
