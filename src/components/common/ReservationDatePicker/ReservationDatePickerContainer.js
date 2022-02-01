import { connect } from 'react-redux'
import ReservationDatePicker from './ReservationDatePicker';
import { getEventDateById } from '../../../redux/eventsRedux';
import { getBookingDateById } from '../../../redux/bookingsRedux';
import { getDate, changeDate } from '../../../redux/reservationRedux';

const mapStateToProps = (state, { type, id }) => {
  if (type === 'event') {
    return {
      initialDate: getEventDateById(state, id),
      date: getDate(state),
    }
  } else if (type === 'booking') {
    return {
      initialDate: getBookingDateById(state, id),
      date: getDate(state),
    }
  }
};

const mapDispatchToProps = (dispatch, { type }) => {
  if (type === 'event') {
    return {
      changeDate: (newDate) => dispatch(changeDate(newDate)),
    };
  } else if (type === 'booking') {
    return {
      changeDate: (newDate) => dispatch(changeDate(newDate)),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationDatePicker);