import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { tables } from '../../../settings';

class OrderTableSelect extends React.Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    table: PropTypes.string,
    changeTable: PropTypes.func,
  };

  componentDidMount() {
    const { tableMatch, changeTable } = this.props;

    changeTable(tableMatch);
  }

  render() {
    const { readOnly, table, changeTable } = this.props;

    return (
      <FormControl>
        <InputLabel id='tableSelectLabel'>Table</InputLabel>
        {readOnly ?
          <Select
            labelId='tableSelectLabel'
            id='tableSelect'
            value={table}
            label='Table'
            inputProps={{readOnly}}
            onChange={(event) => changeTable(event.target.value)}
            sx={{minWidth: 210, maxWidth: 246}}
          >
            {tables.map((table, i) => {
              return (
                <MenuItem key={i} value={table.value}>
                  {table.label}
                </MenuItem>
              );
            })}
          </Select>
          :
          <Select
            labelId='tableSelectLabel'
            id='tableSelect'
            value={table}
            label='Table'
            onChange={(event) => changeTable(event.target.value)}
            sx={{minWidth: 210, maxWidth: 246}}
          >
            {tables.map((table, i) => {
              return (
                <MenuItem key={i} value={table.value}>
                  {table.label}
                </MenuItem>
              );
            })}
          </Select>}
      </FormControl>
    );
  }
}

export default OrderTableSelect;
