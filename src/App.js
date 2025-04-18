
import React from 'react'
import './App.css';
import {Box} from '@mui/material';
import { Route, Routes} from 'react-router-dom';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';


export const App = () => {
  return (
    
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseDetail/>} />
      </Routes>
      <Footer/>
    </Box>
    
  )
}
