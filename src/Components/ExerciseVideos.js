import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{ marginTop: { lg: '150px', xs: '20px' } }} p="20px">
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          ml: '20px',
          mt: { lg: '100px', xs: '60px' },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise Videos
      </Typography>

      <Stack
        justifyContent="space-between" // Distribute the space evenly around the items
        alignItems="center"
        sx={{
          flexDirection: { lg: 'row', xs: 'column' }, // Row for large screens and column for small ones
          gap: { lg: '30px', xs: '20px' }, // Add space between the items
          flexWrap: 'wrap',
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            style={{
              textDecoration: 'none',
              width: '100%', // Ensure full width on smaller screens
              maxWidth: '350px', // Set a maximum width for the video cards
              display: 'flex', // Align elements inside the card properly
              flexDirection: 'column', // Stack the video title and channel name vertically
              alignItems: 'center', // Center align the contents
              justifyContent: 'center', // Vertically center the content
            }}
            className="exercise-videos"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px', // Rounded corners for images
                maxHeight: '250px', // Limit the height of the images
                objectFit: 'cover', // Ensure the image covers the space without distortion
              }}
            />
            <Typography  variant="h5" color="#000" sx={{ textAlign: 'center', mt: '10px' }}>
              {item.video.title}
            </Typography>
            <Typography fontWeight={800} variant="h6" color="#000" sx={{ textAlign: 'center', mt: '5px' }}>
              {item.video.channelName}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
