import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

class ReservationDurationAmount extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['event', 'booking']).isRequired,
    id: PropTypes.number.isRequired,
    initialDuration: PropTypes.number.isRequired,
    duration: PropTypes.number,
    changeDuration: PropTypes.func,
  }

  componentDidMount() {
    const { initialDuration, changeDuration } = this.props;

    changeDuration(initialDuration);
  }

  handleDurationDecrement(currentDuration) {
    const { changeDuration } = this.props;

    if (currentDuration > 1) {
      changeDuration(--currentDuration);
    } else {
      return;
    }
  }

  handleDurationIncrement(currentDuration) {
    const { changeDuration } = this.props;

    if (currentDuration < 12) {
      changeDuration(++currentDuration);
    } else {
      return;
    }
  }

  render() {
    const { duration } = this.props;

    return (
      <Box width={130}>
        <Typography
          textAlign='center'
          sx={{
            color: 'text.secondary',
            mb: 0.5,
          }}
        >
          Duration (h):
        </Typography>
        <Box
          width={1 / 1}
          display='inline-flex'
          justifyContent='space-evenly'
          alignItems='center'
        >
          <IconButton onClick={() => this.handleDurationDecrement(duration)}>
            <RemoveIcon />
          </IconButton>
          <Card
            variant='outlined'
            sx={{
              height: '2rem',
              width: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              lineHeight: '2rem',
              margin: '0.1rem',
              minWidth: '2rem',
            }}
          >
            {duration}
          </Card>
          <IconButton onClick={() => this.handleDurationIncrement(duration)}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }
}

export default ReservationDurationAmount;
