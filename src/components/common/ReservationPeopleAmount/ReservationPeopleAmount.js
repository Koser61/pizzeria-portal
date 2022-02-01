import React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ReservationPeopleAmount = () => {
  const [peopleAmount, changePeopleAmount] = React.useState(1);

  const handlePeopleDecrement = (currentPeopleAmount) => {
    if (currentPeopleAmount > 1) {
      changePeopleAmount(--currentPeopleAmount);
    } else {
      return;
    }
  };

  const handlePeopleIncrement = (currentPeopleAmount) => {
    if (currentPeopleAmount < 4) {
      changePeopleAmount(++currentPeopleAmount);
    } else {
      return;
    }
  };

  return (
    <Box width={130} m={1}>
      <Typography
        textAlign='center'
        sx={{
          color: 'text.secondary',
          mb: 0.5,
        }}
      >
        People:
      </Typography>
      <Box
        width={1 / 1}
        display='inline-flex'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <IconButton onClick={() => handlePeopleDecrement(peopleAmount)}>
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
          {peopleAmount}
        </Card>
        <IconButton onClick={() => handlePeopleIncrement(peopleAmount)}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ReservationPeopleAmount;
