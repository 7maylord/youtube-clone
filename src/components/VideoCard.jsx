import { Link } from 'react-router-dom'; 
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';
import PropTypes from 'prop-types';

// VideoCard component to display video information
const VideoCard = ({ video }) => {
  // Destructuring video details
  const { id: { videoId }, snippet } = video;
  const { title, channelId, channelTitle, thumbnails } = snippet || {};

  // Fallback values for images and text
  const thumbnailUrl = thumbnails?.high?.url || demoThumbnailUrl;
  const videoLink = videoId ? `/video/${videoId}` : demoVideoUrl;
  const channelLink = channelId ? `/channel/${channelId}` : demoChannelUrl;

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 ,
    display: 'flex', 
    flexDirection: 'column'}}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia
          image={thumbnailUrl}
          alt={title || demoVideoTitle}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link to={videoLink}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelLink}>
          <Typography variant="subtitle2" color="gray">
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

// PropTypes for validating props
VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired, // videoId is required
    }).isRequired, // id is required
    snippet: PropTypes.shape({
      title: PropTypes.string,
      channelId: PropTypes.string,
      channelTitle: PropTypes.string,
      thumbnails: PropTypes.object,
    }).isRequired, // snippet is required
  }).isRequired, // video is required
};

// Export the VideoCard component
export default VideoCard;
