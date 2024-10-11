import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material"; 
import { fetchFromAPI } from "../utils/fetchFromAPI"; 
import { Videos, Sidebar, Loader } from "./"; 

const Feed = () => {
  // State to hold the currently selected category and fetched videos
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Effect to fetch videos when the selected category changes
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      try {
        // Fetch videos from the API based on the selected category
        const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
        setVideos(data.items); // Update videos state with fetched data
      } catch (error) {
        // Handle errors by updating the error state
        setError("Failed to fetch videos. Please try again later.");
        console.error(error); // Log error for debugging
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchVideos(); // Call the fetch function
  }, [selectedCategory]); // Dependency array to re-run the effect when selectedCategory changes

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}> {/* Responsive layout */}
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> {/* Sidebar for category selection */}

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright © 2024 MayLord Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}> {/* Box for displaying videos */}
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span> {/* Dynamic category title */}
        </Typography>

        {loading ? (
          <Loader /> // Show Loader component
        ) : error ? (
          <Typography variant="body1" sx={{ color: "red" }}>{error}</Typography> // Error message
        ) : (
          <Videos videos={videos} /> // Render videos if available
        )}
      </Box>
    </Stack>
  );
};

export default Feed; // Export the Feed component for use in other parts of the application
