import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterLuxon';
import TimePicker from '@mui/lab/TimePicker';

class ReservationTimePicker extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['event', 'booking']).isRequired,
    id: PropTypes.number.isRequired,
    initialHour: PropTypes.string.isRequired,
    hour: PropTypes.object,
    changeHour: PropTypes.func,
  }

  componentDidMount() {
    const { initialHour, changeHour } = this.props;

    const parsedHour = DateTime.fromISO(initialHour);

    changeHour(parsedHour);
  }

  render() {
    const { hour, changeHour } = this.props;

    return (
      <LocalizationProvider dateAdapter={DateAdapter}>
        <TimePicker
          ampm={false}
          minTime={DateTime.fromISO('12:00')}
          maxTime={DateTime.fromISO('23:00')}
          minutesStep={30}
          shouldDisableTime={(timeValue, clockType) => {
            return clockType === 'minutes' && (timeValue !== 0 && timeValue !== 30);
          }}
          label='Hour'
          value={hour}
          onChange={(newHour) => {
            changeHour(newHour);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }
}

export default ReservationTimePicker;
