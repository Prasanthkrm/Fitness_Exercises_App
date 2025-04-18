import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import { Detail } from '../Components/Detail';
import { ExerciseVideos } from '../Components/ExerciseVideos';
import { SimilarExercises } from '../Components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      try {
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

        if (exerciseDetailData) {
          const exerciseVideosData = await fetchData(
            `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
            youtubeOptions
          );
          setExerciseVideos(exerciseVideosData.contents);

          const targetMuscleExercisesData = await fetchData(
            `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
            exerciseOptions
          );
          setTargetMuscleExercises(targetMuscleExercisesData);

          const equipmentExercisesData = await fetchData(
            `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
            exerciseOptions
          );
          setEquipmentExercises(equipmentExercisesData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '2rem',
          fontWeight: 'bold',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        Loading...
      </Box>
    );

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
