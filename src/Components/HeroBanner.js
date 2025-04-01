import { Box, Button, Typography } from '@mui/material'; 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroBannerImage from '../assets/images/banner.png';

const typingVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 0.5, 
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 1, // Delay start of children animation
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
};

export const HeroBanner = () => {
  const text = "Exercise"; // Text to animate
  const [animationKey, setAnimationKey] = useState(0); // To reset the animation

  return (
    <Box 
      sx={{
        mt: { lg: '212px', xs: '70px' },  // Margin top for different screen sizes
        ml: { sm: '50px', xs: '20px' },   // Margin left for different screen sizes
        textAlign: { xs: 'center', sm: 'left' },  // Center text for mobile, left-align for larger screens
        px: { xs: '10px', sm: '20px', lg: '40px' },  // Padding for different screens
      }} 
      position="relative"
    >
      {/* Exercise Studio Title */}
      <Typography 
        color="#FF2625" 
        fontWeight="600" 
        fontSize={{ xs: '20px', sm: '26px', lg: '30px' }} // Responsive font size
        className="mb-3"  // Bootstrap margin bottom class
      >
        Exercise Studio
      </Typography>

      {/* Main Title: Sweat, Smile and Repeat */}
      <Typography 
        fontWeight={700} 
        sx={{ fontSize: { lg: '44px', md: '40px', xs: '30px' } }}  // Responsive font size
        mb="23px" 
        mt="30px"
        className="display-4"  // Bootstrap responsive title class
      >
        Sweat, Smile <br />And Repeat
      </Typography>

      {/* Subtext: Check out the most effective exercises */}
      <Typography 
        fontSize={{ xs: '16px', sm: '18px', md: '20px', lg: '22px' }} // Responsive font size for subtext
        lineHeight="35px" 
        mb={3}
        className="mb-4" // Bootstrap margin bottom class
      >
        Check out the most effective exercises 
      </Typography>

      {/* Explore Exercises Button */}
      <Button 
        variant="contained" 
        color="error" 
        href="#exercises"
        sx={{ 
          background: '#FF2625', 
          padding: '10px 20px',  // Adjust button padding
          fontSize: { xs: '14px', sm: '16px', lg: '18px' }, // Responsive font size for button
        }}
        className="btn btn-lg"  // Bootstrap large button class for large screens
      >
        Explore Exercises
      </Button>

      {/* Animated Text (Hidden on Mobile) */}
      <Box 
        sx={{ display: { xs: "none", sm: "flex" } }} // Hide on mobile, show on larger screens
      >
        <motion.div 
          key={animationKey} // Reset animation by changing key
          variants={typingVariants} 
          initial="hidden" 
          animate="visible"
          style={{
            fontWeight: 600,
            color: "#FF2625",
            opacity: 0.1,
            display: "flex",
            fontSize: "200px",
            gap: "10px", // Adds spacing between letters
          }}
          onAnimationComplete={() => {
            setAnimationKey(prevKey => prevKey + 1); // Reset animation after completion
          }}
        >
          {text.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </Box>

      {/* Responsive Image (Hidden on Mobile) */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
      </Box>
    </Box>
  );
};

export default HeroBanner;
