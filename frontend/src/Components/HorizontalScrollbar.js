import React, { useContext } from 'react';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, IconButton } from '@mui/material';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import { ExerciseCard } from './ExerciseCard';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <IconButton onClick={() => scrollPrev()} >
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: "40px" }} />
    </IconButton>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <IconButton onClick={() => scrollNext()} sx={{ position: "absolute", right: "0px", zIndex: 2 }}>
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: "40px" }} />
    </IconButton>
  );
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart ,isBodyPart}) => (
  <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyPart ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item}/>}
        </Box>
      ))}
    </ScrollMenu>
  </Box>
);

export default HorizontalScrollbar;
