import React from 'react';
import PropTypes from 'prop-types'

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class ReservationTableSelect extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['event', 'booking']).isRequired,
    id: PropTypes.number.isRequired,
    initialTable: PropTypes.number.isRequired,
    table: PropTypes.number.isRequired,
    changeTable: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { initialTable, changeTable } = this.props;

    changeTable(initialTable);
  }

  render() {
    const { table, changeTable } = this.props;

    return (
      <FormControl fullWidth>
      <InputLabel id='table-select-label'>Table</InputLabel>
      <Select
        labelId='table-select-label'
        id='table-select'
        value={table}
        label='Table'
        onChange={(event) => changeTable(event.target.value)}
      >
        <MenuItem value={1}>Table 1</MenuItem>
        <MenuItem value={2}>Table 2</MenuItem>
        <MenuItem value={3}>Table 3</MenuItem>
      </Select>
    </FormControl>
    );
  }
}

export default ReservationTableSelect;
