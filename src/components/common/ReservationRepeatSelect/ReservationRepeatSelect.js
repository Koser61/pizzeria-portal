import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class ReservationRepeatSelect extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['event', 'booking']).isRequired,
    id: PropTypes.number.isRequired,
    initialRepeat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    repeat: PropTypes.string.isRequired,
    changeRepeat: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { initialRepeat, changeRepeat } = this.props;

    if (initialRepeat === false) {
      changeRepeat('none');
    } else {
      changeRepeat(initialRepeat);
    }
  }

  render() {
    const { repeat, changeRepeat } = this.props;

    return (
      <FormControl fullWidth>
        <InputLabel id='repeat-select-label'>Repeat</InputLabel>
        <Select
          labelId='repeat-select-label'
          id='repeat-select'
          value={repeat}
          label='Repeat'
          onChange={(event) => {changeRepeat(event.target.value)}}
        >
          <MenuItem value={'none'}>No repeat</MenuItem>
          <MenuItem value={'daily'}>Daily</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default ReservationRepeatSelect;
