import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import TextField from '@mui/material/TextField';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DateAdapter from '@mui/lab/AdapterLuxon';

class OrderTimePicker extends React.Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    id: PropTypes.string,
    orderTime: PropTypes.oneOfType([
      PropTypes.string, PropTypes.object
    ]),
    loadedOrderTime: PropTypes.string,
    changeOrderTime: PropTypes.func,
  };

  componentDidMount() {
    const { readOnly, loadedOrderTime, changeOrderTime } = this.props;
    
    if(!readOnly) {
      changeOrderTime(DateTime.now());
    } else {
      changeOrderTime(loadedOrderTime);
    }
  }

  render() {
    const { readOnly, orderTime, changeOrderTime } = this.props;

    if(readOnly) {
      return (
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label='Order Time'
            value={orderTime}
            onChange={(newOrderTime) => {
              changeOrderTime(newOrderTime);
            }}
            ampm={false}
            readOnly
          />
        </LocalizationProvider>
      );
    } else {
      const minDate = DateTime.now();
      const maxDate = minDate.plus({ days: 14 });

      return (
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label='Order Time'
            value={orderTime}
            onChange={(newOrderTime) => {
              changeOrderTime(newOrderTime);
            }}
            ampm={false}
            minDate={minDate}
            maxDate={maxDate}
          />
        </LocalizationProvider>
      );
    }
  }
}

export default OrderTimePicker;
