import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const SearchExercise = () => {
    const [search,setsearch]=useState('')

    const handleSearch = async ()=>{
        if(search){
            // const exercisesData =await fetch Data();
        }        
    }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{
            fontSize:{lg:"44px",xs:'30px'}
        }} mb="50px" textAlign="center">
            Awesome Exercises You <br />Should Know
        </Typography>
        <Box position="relative" mb="72px" >
            <TextField sx={{
                input:{fontWeight:'700',
                border:'none',
                borderRadius:'4px'},
                width:{
                    lg:'800px',
                    xs:'350px',
                    backgroundColor:'#fff',borderRadius:'40px'
                }
            }} 
            height="76px"
            value=""
            onChange={(e)=>{setsearch(e.target.value.toLowerCase())}}
            placeholder='Search Exercises'
            type='text'
            />
            <Button className='search-btn' 
            sx={{
                bgcolor:'#FF2625',
                color:'#fff',
                textTransform:'none',
                width:{lg:'175px',xs:'80px'},
                fontSize:{lg:'20px',sx:'14px'},
                height:'56px',
                position:'absolute',
                right:'0'
            }}
            onClick={handleSearch}
            >Search</Button>
        </Box>

    </Stack>
  )
}
