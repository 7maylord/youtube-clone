import { useEffect, useState } from "react"; 
import { Link, useParams } from "react-router-dom"; 
import ReactPlayer from "react-player"; 
import { Typography, Box, Stack } from "@mui/material"; 
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; 
import { Videos, Loader } from "./"; 
import { fetchFromAPI } from "../utils/fetchFromAPI";

// VideoDetail component to display individual video details
const VideoDetail = () => {
  // State to hold video details and related videos
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams(); // Extract video ID from URL parameters

  // Effect to fetch video details and related videos
  useEffect(() => {
    // Fetch video details
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0])); // Set video details

    // Fetch related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items)); // Set related videos
  }, [id]); // Dependency on video ID

  // Show loader while video details are being fetched
  if (!videoDetail?.snippet) return <Loader />;

  // Destructure video details for easier access
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh"> {/* Container for the video detail */}
      <Stack direction={{ xs: "column", md: "row" }}> {/* Responsive layout */}
        <Box flex={1}> {/* Video player section */}
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`} // URL for the video
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title} {/* Video title */}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}> {/* Link to channel page */}
                <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views {/* View count */}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes {/* Like count */}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center"> {/* Related videos section */}
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;