import React from 'react';
import PropTypes from 'prop-types';
//import { DateTime } from 'luxon';

import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterLuxon';
import DatePicker from '@mui/lab/DatePicker';

class ReservationDatePicker extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['event', 'booking']).isRequired,
    id: PropTypes.number.isRequired,
    initialDate: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    changeDate: PropTypes.func,
  }

  componentDidMount() {
    const { initialDate, changeDate } = this.props;

    changeDate(initialDate);
  }

  render() {
    const { date, changeDate } = this.props;

    return (
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label='Date'
          value={date}
          onChange={(newDate) => {
            changeDate(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }
}

export default ReservationDatePicker;