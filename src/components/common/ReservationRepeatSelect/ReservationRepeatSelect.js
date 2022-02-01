import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ReservationRepeatSelect = () => {
  const [repeat, setRepeat] = React.useState("");

  const handleRepeatChange = (event) => {
    setRepeat(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id='repeat-select-label'>Repeat</InputLabel>
      <Select
        labelId='repeat-select-label'
        id='repeat-select'
        value={repeat}
        label='Repeat'
        onChange={handleRepeatChange}
      >
        <MenuItem value={false}>No repeat</MenuItem>
        <MenuItem value={"daily"}>Daily</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ReservationRepeatSelect;
