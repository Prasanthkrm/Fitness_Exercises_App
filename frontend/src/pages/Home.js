import React,{useState} from 'react'
import {Box} from '@mui/material';
import { HeroBanner } from '../Components/HeroBanner';
import { SearchExercise } from '../Components/SearchExercise';
import { Exercise } from '../Components/Exercise';
const Home = () => {
  const [exercises,setExercises] =useState([]);
  const [bodyPart, setBodyPart] = useState('all')
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
      <Exercise exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}   />

    </Box>
  )
}

export default Home