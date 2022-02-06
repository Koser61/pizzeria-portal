import { connect } from 'react-redux'
import ReservationTimePicker from './ReservationTimePicker';
import { getEventHourById } from '../../../redux/eventsRedux';
import { getBookingHourById } from '../../../redux/bookingsRedux';
import { getHour, changeHour } from '../../../redux/reservationRedux';

const mapStateToProps = (state, { type, id }) => {
  if (type === 'event') {
    return {
      initialHour: getEventHourById(state, id),
      hour: getHour(state),
    }
  } else if (type === 'booking') {
    return {
      initialHour: getBookingHourById(state, id),
      hour: getHour(state),
    }
  }
};

const mapDispatchToProps = (dispatch, { type }) => {
  if (type === 'event') {
    return {
      changeHour: (newHour) => dispatch(changeHour(newHour)),
    };
  } else if (type === 'booking') {
    return {
      changeHour: (newHour) => dispatch(changeHour(newHour)),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationTimePicker);