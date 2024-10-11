
import PropTypes from 'prop-types';
import { Stack, Box } from '@mui/material';
import { ChannelCard, Loader, VideoCard } from './';

// Videos component to display a list of videos or channels
const Videos = ({ videos, direction = 'row' }) => {
  // Show loader if no videos are available
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

// PropTypes for validating props
Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape({
        videoId: PropTypes.string,
        channelId: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
  direction: PropTypes.string,
};

export default Videos;

