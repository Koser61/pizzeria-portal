import React from 'react';

import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterLuxon';
import DatePicker from '@mui/lab/DatePicker';

const ReservationDatePicker = () => {
  const [date, setDate] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        label='Date'
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default ReservationDatePicker;