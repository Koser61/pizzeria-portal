import React from 'react';
import PropTypes from 'prop-types';

import Reservation from '../../features/Reservation/Reservation';

const Booking = ({ match: { params: { id } } }) => (
  <>
    <Reservation type='booking' id={parseInt(id)} />
  </>
);

Booking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Booking;