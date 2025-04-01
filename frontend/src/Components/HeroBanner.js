import { Box, Containe,Button, Stack,Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

export const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'}
    }} position='relative' fontSize='26px'>
    <Typography color='#FF2625' fontWeight="600" fontSize="26px">
    Exercise Studio
    </Typography>
    <Typography fontWeight={700} 
    sx={{fontSize:{lg:'44px',xs:'40px'}}}
    mb="23px" mt="30px"
    >
        Sweat, Smile <br />And Repeat
    </Typography>
    <Typography fontSize='22px' lineHeight='35px' mb={3}>
        Check out the most effective exercises 
    </Typography>
    <Button variant="contained" color="error" 
    href='#exercises'
    sx={{background:'#FF2625', padding:'10px'}}
    >Explore Exercises</Button>
    <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
            opacity:0.1,
            display:{lg:'block',xs:'none'}
        }}
        fontSize='200px'
    >
        Exercise
    </Typography>
    <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />   
    </Box>
  )
}
