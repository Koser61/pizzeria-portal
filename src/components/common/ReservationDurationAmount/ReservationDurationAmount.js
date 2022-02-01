import React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ReservationDurationAmount = () => {
  const [duration, changeDuration] = React.useState(1);

  const handleDurationDecrement = (currentDuration) => {
    if (currentDuration > 1) {
      changeDuration(--currentDuration);
    } else {
      return;
    }
  };

  const handleDurationIncrement = (currentDuration) => {
    if (currentDuration < 12) {
      changeDuration(++currentDuration);
    } else {
      return;
    }
  };

  return (
    <Box width={130}>
      <Typography
        textAlign='center'
        sx={{
          color: 'text.secondary',
          mb: 0.5,
        }}
      >
        Duration (h):
      </Typography>
      <Box
        width={1 / 1}
        display='inline-flex'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <IconButton onClick={() => handleDurationDecrement(duration)}>
          <RemoveIcon />
        </IconButton>
        <Card
          variant='outlined'
          sx={{
            height: '2rem',
            width: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            lineHeight: '2rem',
            margin: '0.1rem',
            minWidth: '2rem',
          }}
        >
          {duration}
        </Card>
        <IconButton onClick={() => handleDurationIncrement(duration)}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ReservationDurationAmount;
