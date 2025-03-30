
import React from 'react'
import './App.css';
import {Box} from '@mui/material';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './Components/Navbar';


export const App = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    
    <BrowserRouter>
    <Box width="400px">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseDetail/>} />
      </Routes>
    </Box>
    </BrowserRouter>
  )
}
