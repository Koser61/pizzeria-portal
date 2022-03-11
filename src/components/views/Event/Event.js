import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Reservation from '../../features/Reservation/Reservation';

const Event = ({ match: { params: { id } }, changeView }) => {
  useEffect(() => changeView('Event'), [changeView])

  return (
    <>
      <Reservation type='event' id={parseInt(id)} />
    </>
  );
};

Event.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  changeView: PropTypes.func,
};

export default Event;