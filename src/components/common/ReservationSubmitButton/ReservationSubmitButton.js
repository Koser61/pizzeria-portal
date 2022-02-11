import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import Button from '@mui/material/Button';

import SaveIcon from '@mui/icons-material/Save';

const ReservationSubmitButton = ({ id, date, hour, table, repeat, duration, ppl, breadStarter, lemonWaterStarter }) => {
  const prepareDataObject = () => {
    const parseDate = () => {
      return DateTime.fromISO(date).toISODate();
    };

    const parseHour = () => {
      return DateTime.fromISO(hour).toLocaleString(DateTime.TIME_SIMPLE);
    };

    const parseRepeat = () => {
      if(repeat === 'none') {
        return false;
      } else {
        return repeat;
      }
    };

    const parseStarters = () => {
      let starters = [];

      breadStarter && starters.push('bread');
      lemonWaterStarter && starters.push('lemonWater');

      return starters;
    };

    const dataObject = {
      id: id,
      date: parseDate(),
      hour: parseHour(),
      table: table,
      repeat: parseRepeat(),
      duration: duration,
      ppl: ppl,
      starters: parseStarters(),
    };

    console.log('dataObject', dataObject);
  };

  const handleClick = (event) => {
    event.preventDefault();

    prepareDataObject();
  };

  return (
    <Button
      sx={{mb: 1, mr: 1}}
      variant='contained'
      endIcon={<SaveIcon />}
      onClick={handleClick}
    >
      Save Changes
    </Button>
  );
};

ReservationSubmitButton.propTypes = {
  type: PropTypes.oneOf(['event', 'booking']).isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.object,
  hour: PropTypes.object,
  table: PropTypes.number,
  repeat: PropTypes.string,
  duration: PropTypes.number,
  ppl: PropTypes.number,
  breadStarter: PropTypes.bool,
  lemonWaterStarter: PropTypes.bool,
};

export default ReservationSubmitButton;
