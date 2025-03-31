import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {exerciseOptions,fetchData} from '../utils/fetchData'
import { Detail } from '../Components/Detail';
import { ExerciseVideos } from '../Components/ExerciseVideos';
import { SimilarExercises } from '../Components/SimilarExercises';

const ExerciseDetail = () => {

  const [exerciseDetail,setExerciseDetail] = useState({});
  const {id} =useParams();

  useEffect(() => {
    const fetchExercisesData = async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);
       console.log(exerciseDetailData)
      
    }
    fetchExercisesData();
  }, [id]);
  


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos/>
      <SimilarExercises/>

    </Box>
  )
}

export default ExerciseDetail