import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Reservation from '../../features/Reservation/Reservation';

const Booking = ({ match: { params: { id } }, changeView }) => {
  useEffect(() => changeView('Booking'), [changeView])

  return (
    <>
      <Reservation type='booking' id={parseInt(id)} />
    </>
  );
};

Booking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  changeView: PropTypes.func,
};

export default Booking;