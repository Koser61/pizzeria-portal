import { connect } from 'react-redux'
import ReservationDurationAmount from './ReservationDurationAmount';
import { getEventDurationById } from '../../../redux/eventsRedux';
import { getBookingDurationById } from '../../../redux/bookingsRedux';
import { getDuration, changeDuration } from '../../../redux/reservationRedux';

const mapStateToProps = (state, { type, id }) => {
  if (type === 'event') {
    return {
      initialDuration: getEventDurationById(state, id),
      duration: getDuration(state),
    }
  } else if (type === 'booking') {
    return {
      initialDuration: getBookingDurationById(state, id),
      duration: getDuration(state),
    }
  }
};

const mapDispatchToProps = (dispatch, { type }) => {
  if (type === 'event') {
    return {
      changeDuration: (newDuration) => dispatch(changeDuration(newDuration)),
    };
  } else if (type === 'booking') {
    return {
      changeDuration: (newDuration) => dispatch(changeDuration(newDuration)),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationDurationAmount);