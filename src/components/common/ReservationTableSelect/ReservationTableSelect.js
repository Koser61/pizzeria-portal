import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ReservationTableSelect = () => {
  const [table, setTable] = React.useState('');

  const handleTableChange = (event) => {
    setTable(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id='table-select-label'>Table</InputLabel>
      <Select
        labelId='table-select-label'
        id='table-select'
        value={table}
        label='Table'
        onChange={handleTableChange}
      >
        <MenuItem value={1}>Table 1</MenuItem>
        <MenuItem value={2}>Table 2</MenuItem>
        <MenuItem value={3}>Table 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ReservationTableSelect;
