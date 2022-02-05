import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

class ReservationPeopleAmount extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['event', 'booking']).isRequired,
    id: PropTypes.number.isRequired,
    initialPeopleAmount: PropTypes.number.isRequired,
    peopleAmount: PropTypes.number,
    changePeopleAmount: PropTypes.func,
  }

  componentDidMount() {
    const { initialPeopleAmount, changePeopleAmount } = this.props;

    changePeopleAmount(initialPeopleAmount);
  }

  handleDurationDecrement(currentPeopleAmount) {
    const { changePeopleAmount } = this.props;

    if (currentPeopleAmount > 1) {
      changePeopleAmount(--currentPeopleAmount);
    } else {
      return;
    }
  }

  handleDurationIncrement(currentPeopleAmount) {
    const { changePeopleAmount } = this.props;

    if (currentPeopleAmount < 4) {
      changePeopleAmount(++currentPeopleAmount);
    } else {
      return;
    }
  }

  render() {
    const { peopleAmount } = this.props;

    return (
      <Box width={130} m={1}>
        <Typography
          textAlign='center'
          sx={{
            color: 'text.secondary',
            mb: 0.5,
          }}
        >
          People:
        </Typography>
        <Box
          width={1 / 1}
          display='inline-flex'
          justifyContent='space-evenly'
          alignItems='center'
        >
          <IconButton onClick={() => this.handlePeopleDecrement(peopleAmount)}>
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
            {peopleAmount}
          </Card>
          <IconButton onClick={() => this.handlePeopleIncrement(peopleAmount)}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }
}

export default ReservationPeopleAmount;
