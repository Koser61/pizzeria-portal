import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DateAdapter from '@mui/lab/AdapterLuxon';

import { DateTime } from 'luxon';

class OrderTimePicker extends React.Component {
  static propTypes = {
    orderTime: PropTypes.object,
    changeOrderTime: PropTypes.func,
  };

  componentDidMount() {
    const { changeOrderTime } = this.props;
    changeOrderTime(DateTime.now());
  }

  render() {
    const { orderTime, changeOrderTime } = this.props;

    return (
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label='Order Time'
          value={orderTime}
          onChange={(newOrderTime) => {
            changeOrderTime(newOrderTime);
          }}
        />
      </LocalizationProvider>
    );
  }
}

export default OrderTimePicker;
