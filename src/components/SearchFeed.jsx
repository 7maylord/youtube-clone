import { useState, useEffect } from "react"; 
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom"; 
import { fetchFromAPI } from "../utils/fetchFromAPI"; 
import { Videos } from "./";

const SearchFeed = () => {
  // State to hold the videos fetched from the API
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);
  
  // Extract the search term from URL parameters
  const { searchTerm } = useParams();

  // Effect to fetch videos whenever the search term changes
  useEffect(() => {
    // Function to fetch videos asynchronously
    const fetchVideos = async () => {
      try {
        // Fetch videos based on the search term
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        // Update the state with the fetched videos
        setVideos(data.items);
      } catch (error) {
        // Set the error message if the fetch fails
        setError('Failed to fetch videos. Please try again later.');
        console.error('Fetch error:', error); // Log the error for debugging
      }
    };
    
    fetchVideos(); // Call the fetch function
  }, [searchTerm]); // Dependency array to re-run the effect when searchTerm changes


  return (
    <Box p={2} minHeight="95vh"> {/* Box for layout with padding and minimum height */}
      <Typography 
        variant="h4" 
        fontWeight={900}  
        color="white" 
        mb={3} 
        ml={{ xs: 0, sm: "100px" }} 
      >
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="center">
        <Box sx={{ mr: { sm: '100px' } }} /> {/* Spacer for responsive layout */}
        {videos && <Videos videos={videos} />} {/* Render Videos component only if videos are available */}
      </Box>
    </Box>
  );
};

export default SearchFeed; // Export the component for use in other parts of the application
