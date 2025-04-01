import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from '../Components/HorizontalScrollbar';

export const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            try {
                const bodyPartsData = await fetchData(
                    'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                    exerciseOptions
                );

                if (Array.isArray(bodyPartsData)) {
                    setBodyParts(['all', ...bodyPartsData]);
                } else {
                    console.error("Unexpected API response:", bodyPartsData);
                    setBodyParts(['all']);  // Fallback to avoid crash
                }
            } catch (error) {
                console.error("Error fetching body parts:", error);
                setBodyParts(['all']); // Prevent UI crash if API fails
            }
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            try {
                const exercisesData = await fetchData(
                    'https://exercisedb.p.rapidapi.com/exercises',
                    exerciseOptions
                );

                if (Array.isArray(exercisesData)) {
                    const searchedExercises = exercisesData.filter(
                        (item) =>
                            item.name.toLowerCase().includes(search) ||
                            item.target.toLowerCase().includes(search) ||
                            item.equipment.toLowerCase().includes(search) ||
                            item.bodyPart.toLowerCase().includes(search)
                    );

                    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

                    setSearch('');
                    setExercises(searchedExercises);
                } else {
                    console.error("Unexpected API response:", exercisesData);
                }
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{
                fontSize: { lg: "44px", xs: '30px' }
            }} mb="50px" textAlign="center">
                Awesome Exercises You <br />Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField sx={{
                    input: {
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '4px'
                    },
                    width: {
                        lg: '800px',
                        xs: '350px',
                        backgroundColor: '#fff', borderRadius: '40px'
                    }
                }}
                    height="76px"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button className='search-btn'
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', sx: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={handleSearch}
                >Search</Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px', overflowX: "auto", whiteSpace: "nowrap" }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
            </Box>
        </Stack>
    )
}
