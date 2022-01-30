import React from 'react';
import PropTypes from 'prop-types';

import Reservation from '../../features/Reservation/Reservation';

const Event = ({ match: { params: { id } } }) => (
  <>
    <Reservation type='event' id={parseInt(id)} />
  </>
);

Event.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Event;