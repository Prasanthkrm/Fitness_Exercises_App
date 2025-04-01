import React from 'react';
import Logo from '../assets/images/Exercise Studio.png';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Stack 
        direction="row" 
        justifyContent="space-around" 
        sx={{
          gap: { sm: '122px', xs: '40px' },
          mt: { sx: '32px', xs: '20px' },
          justifyContent: 'none',
          px: { xs: '10px', sm: '20px' } // Padding adjustment for mobile
        }}
      >
        <Link to="/">
          <img 
            src={Logo} 
            alt="logo" 
            style={{ 
              width: '48px', 
              height: '48px', 
              margin: '0,20px',
              display: 'block' // Ensures image aligns properly
            }} 
          />
        </Link>
        <Stack 
          direction="row" 
          gap="40px" 
          fontSize="24px" 
          alignItems="flex-end" 
          sx={{
            display: { xs: 'none', sm: 'flex' }, // Hide on mobile
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#3A1212' }}>Home</Link>
          <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercies</a>
          <a href="#footer" style={{ textDecoration: 'none', color: '#3A1212' }}>About</a>
        </Stack>

        {/* Mobile Menu */}
        <Stack 
          direction="row" 
          gap="20px" 
          fontSize="18px" 
          alignItems="center" 
          sx={{
            display: { xs: 'flex', sm: 'none' }, // Show on mobile only
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#3A1212' }}>Home</Link>
          <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
          <a href="#footer" style={{ textDecoration: 'none', color: '#3A1212' }}>About</a>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
