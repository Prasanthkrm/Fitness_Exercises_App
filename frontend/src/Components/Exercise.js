import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ExerciseCard } from './ExerciseCard';

export const Exercise = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        let exercisesData = [];

        if (bodyPart === 'all') {
          exercisesData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises',
            exerciseOptions
          );
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exerciseOptions
          );
        }

        if (Array.isArray(exercisesData)) {
          setExercises(exercisesData);
        } else {
          console.error("Unexpected API response:", exercisesData);
          setExercises([]); // Set to empty array to prevent crash
        }

        setCurrentPage(1);
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setExercises([]); // Prevent crash on API failure
      }
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  
  const currentExercises = Array.isArray(exercises) ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="46px"
      >
        Showing Results
      </Typography>

      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.length > 0 ? (
          currentExercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)
        ) : (
          <Typography variant="h6">No exercises found.</Typography>
        )}
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {Array.isArray(exercises) && exercises.length > 6 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
