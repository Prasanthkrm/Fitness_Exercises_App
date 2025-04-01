import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

export const Detail = ({ exerciseDetail }) => {
  
  if (!exerciseDetail) return <Typography>Loading...</Typography>;

  const { bodyPart, gifUrl, name, target, equipment, instructions = [] } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart || "Unknown" },
    { icon: TargetImage, name: target || "Unknown" },
    { icon: EquipmentImage, name: equipment || "Unknown" },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant="h4" textTransform="uppercase">
          {name || "Exercise Name"}
        </Typography>

        <Typography variant="h5">Instructions</Typography>
        {instructions.length > 0 ? (
          instructions.map((instruction, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 0 }}>
              <strong>Step {index + 1}:</strong> {instruction}
            </Typography>
          ))
        ) : (
          <Typography variant="body1">No instructions available</Typography>
        )}

        {extraDetail.map((item, index) => (
          <Stack key={item.name || index} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '80px', height: '80px' }}>
              <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
