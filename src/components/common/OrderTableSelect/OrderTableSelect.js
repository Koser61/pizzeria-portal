import React from 'react';
import { PropTypes } from 'prop-types';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const TableSelect = ({table, changeTable}) => {
  return (
    <FormControl>
      <InputLabel id='tableSelectLabel'>Table</InputLabel>
      <Select
        labelId='tableSelectLabel'
        id='tableSelect'
        value={table}
        label='Table'
        onChange={(event) => {
          changeTable(event.target.value);
        }}
        sx={{minWidth: 210, maxWidth: 246}}
      >
        <MenuItem value={'table1'}>Table 1</MenuItem>
        <MenuItem value={'table2'}>Table 2</MenuItem>
        <MenuItem value={'table3'}>Table 3</MenuItem>
      </Select>
    </FormControl>
  );
};

TableSelect.propTypes = {
  table: PropTypes.string,
  changeTable: PropTypes.func,
};

export default TableSelect;
