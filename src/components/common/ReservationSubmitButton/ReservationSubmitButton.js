import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import SaveIcon from '@mui/icons-material/Save';

const ReservationSubmitButton = ({
  id,
  date,
  hour,
  table,
  repeat,
  duration,
  ppl,
  breadStarter,
  lemonWaterStarter,
  initialRepeat,
  handleDataChange,
  handleDataChangeState
}) => {
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

    return dataObject;
  };

  const handleClick = (event) => {
    event.preventDefault();

    const dataObject = prepareDataObject();

    handleDataChange(dataObject, initialRepeat);
  };

  const { active, error } = handleDataChangeState;

  if (error) {
    return (
      <Button
        sx={{mb: 1, mr: 1}}
        variant='contained'
        endIcon={
          active ? <CircularProgress size='1.25rem' sx={{color: 'white'}} />
                 : <SaveIcon />
        }
        onClick={handleClick}
        color='error'
      >
        Save Changes
      </Button>
    );
  } else {
    return (
      <Button
        sx={{mb: 1, mr: 1}}
        variant='contained'
        endIcon={
          active ? <CircularProgress size='1.25rem' sx={{color: 'white'}} />
                 : <SaveIcon />
        }
        onClick={handleClick}
      >
        Save Changes
      </Button>
    );
  }
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
  initialRepeat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  handleDataChange: PropTypes.func,
  handleDataChangeState: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.bool,
  }),
};

export default ReservationSubmitButton;
