import React from 'react'
import Logo from '../assets/images/Logo.png';
import { Stack} from '@mui/material';
import {Link} from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
    <Stack>
      <Link to="/"><img src={Logo} alt="logo" style={{width:'48px', height:'48px', margin:'0,20px'}}/></Link>
      <Stack>
        <Link to="/" style={{textDecoration:'none', color:'#3A1212'}}>Home</Link>
        <a href="#exercies" style={{textDecoration:'none', color:'#3A1212'}}>Exercies</a>
      </Stack>

    </Stack>
      
    </div>
  )
}

export default Navbar