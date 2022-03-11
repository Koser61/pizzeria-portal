import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getOrdersLoadingState, fetchOrdersFromAPI } from '../../../redux/ordersRedux';
import { getEventsLoadingState, fetchEventsFromAPI } from '../../../redux/eventsRedux';
import { getBookingsLoadingState, fetchBookingsFromAPI } from '../../../redux/bookingsRedux';
import { changeView } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  ordersLoading: getOrdersLoadingState(state),
  eventsLoading: getEventsLoadingState(state),
  bookingsLoading: getBookingsLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
  fetchEvents: () => dispatch(fetchEventsFromAPI()),
  fetchBookings: () => dispatch(fetchBookingsFromAPI()),
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);