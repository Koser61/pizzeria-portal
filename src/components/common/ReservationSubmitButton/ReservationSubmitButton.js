import React from 'react';

import Button from '@mui/material/Button';

import SaveIcon from '@mui/icons-material/Save';

const ReservationSubmitButton = () => {
  return (
    <Button sx={{mb: 1, mr: 1}} variant="contained" endIcon={<SaveIcon />}>
      Save Changes
    </Button>
  );
};

export default ReservationSubmitButton;