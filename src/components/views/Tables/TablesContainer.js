import { connect } from 'react-redux';
import Tables from './Tables';
import {
  getRepeatEvents,
  getRepeatEventsLoadingState,
  getNoRepeatEvents,
  getNoRepeatEventsLoadingState,
  fetchRepeatEventsFromAPI,
  fetchNoRepeatEventsFromAPI,
} from '../../../redux/eventsRedux';
import { getAllBookings, getBookingsLoadingState, fetchBookingsFromAPI } from '../../../redux/bookingsRedux';

const mapStateToProps = (state) => ({
  eventsRepeat: getRepeatEvents(state),
  eventsRepeatLoading: getRepeatEventsLoadingState(state),
  eventsNoRepeat: getNoRepeatEvents(state),
  eventsNoRepeatLoading: getNoRepeatEventsLoadingState(state),
  bookings: getAllBookings(state),
  bookingsLoading: getBookingsLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRepeatEvents: () => dispatch(fetchRepeatEventsFromAPI()),
  fetchNoRepeatEvents: () => dispatch(fetchNoRepeatEventsFromAPI()),
  fetchBookings: () => dispatch(fetchBookingsFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);