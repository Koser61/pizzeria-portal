import React from 'react';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ReservationStartersCheckboxes = () => {
  const [starters, setStarters] = React.useState({
    bread: false,
    lemonWater: false,
  });

  const handleChange = (event) => {
    setStarters({
      ...starters,
      [event.target.name]: event.target.checked,
    });
  };
  
  const { bread, lemonWater } = starters;

  return (
    <FormControl sx={{ m: 2 }} component='fieldset' variant='standard'>
      <FormLabel sx={{ ml: 1 }} component='legend'>
        Starters:
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={bread} onChange={handleChange} name='bread' />
          }
          label='Bread'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={lemonWater}
              onChange={handleChange}
              name='lemonWater'
            />
          }
          label='Lemon water'
        />
      </FormGroup>
    </FormControl>
  );
};

export default ReservationStartersCheckboxes;
