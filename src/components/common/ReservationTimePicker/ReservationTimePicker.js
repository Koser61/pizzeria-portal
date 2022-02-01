import React from 'react';

import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterLuxon';
import TimePicker from '@mui/lab/TimePicker';

const ReservationTimePicker = () => {
  const [time, setTime] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <TimePicker
        label='Hour'
        value={time}
        onChange={(newTime) => {
          setTime(newTime);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default ReservationTimePicker;
