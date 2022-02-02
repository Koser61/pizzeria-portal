import { connect } from 'react-redux'
import ReservationRepeatSelect from './ReservationRepeatSelect';
import { getEventRepeatById } from '../../../redux/eventsRedux';
import { getBookingRepeatById } from '../../../redux/bookingsRedux';
import { getRepeat, changeRepeat } from '../../../redux/reservationRedux';

const mapStateToProps = (state, { type, id }) => {
  if (type === 'event') {
    return {
      initialRepeat: getEventRepeatById(state, id),
      repeat: getRepeat(state),
    }
  } else if (type === 'booking') {
    return {
      initialRepeat: getBookingRepeatById(state, id),
      repeat: getRepeat(state),
    }
  }
};

const mapDispatchToProps = (dispatch, { type }) => {
  if (type === 'event') {
    return {
      changeRepeat: (newTable) => dispatch(changeRepeat(newTable)),
    };
  } else if (type === 'booking') {
    return {
      changeRepeat: (newTable) => dispatch(changeRepeat(newTable)),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationRepeatSelect);