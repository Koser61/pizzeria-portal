import { connect } from 'react-redux';
import Tables from './Tables';
import { getAllEvents, getEventsLoadingState, fetchEventsFromAPI } from '../../../redux/eventsRedux';
import { getAllBookings, getBookingsLoadingState, fetchBookingsFromAPI } from '../../../redux/bookingsRedux';
import { changeView } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  events: getAllEvents(state),
  eventsLoading: getEventsLoadingState(state),
  bookings: getAllBookings(state),
  bookingsLoading: getBookingsLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEventsFromAPI()),
  fetchBookings: () => dispatch(fetchBookingsFromAPI()),
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);