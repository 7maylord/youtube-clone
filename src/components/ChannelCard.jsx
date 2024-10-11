import React from 'react';
import PropTypes from 'prop-types';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

// ChannelCard component to display a channel's information
const ChannelCard = React.memo(({ channelDetail, marginTop }) => {
  // Destructuring channelDetail to extract relevant data
  const {
    id: { channelId } = {},
    snippet: { title, thumbnails } = {},
    statistics: { subscriberCount } = {},
  } = channelDetail || {};

  // Fallback image if no thumbnail is provided
  const profileImage = thumbnails?.high?.url || demoProfilePicture;

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={profileImage}
            alt={title || 'Channel Profile Picture'} // Accessible alt text for the image
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6">
            {title}{' '}
            <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
          </Typography>
          {subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
});

// Setting a display name for the component
ChannelCard.displayName = 'ChannelCard';

// PropTypes for validating the props
ChannelCard.propTypes = {
  channelDetail: PropTypes.shape({
    id: PropTypes.shape({
      channelId: PropTypes.string, // ID of the channel
    }),
    snippet: PropTypes.shape({
      title: PropTypes.string, // Title of the channel
      thumbnails: PropTypes.object, // Thumbnails object containing images
    }),
    statistics: PropTypes.shape({
      subscriberCount: PropTypes.string, // Number of subscribers
    }),
  }).isRequired, // channelDetail is required
  marginTop: PropTypes.string, // Optional margin for styling
};

export default ChannelCard;
