import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Reservation = ({ type, id }) => {
  return (
    <Container>
      <Typography variant='h2' textAlign='center'>
        {`${type} (id: ${id})`}
      </Typography>
    </Container>
  );
};

Reservation.propTypes = {
  type: PropTypes.oneOf(['event', 'booking']).isRequired,
  id: PropTypes.number.isRequired,
};

export default Reservation;