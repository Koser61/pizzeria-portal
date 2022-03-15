import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import {
  getLocalOrdersLoadingState,
  getDeliveryOrdersLoadingState,
  fetchLocalOrdersFromAPI,
  fetchDeliveryOrdersFromAPI
} from '../../../redux/kitchenRedux';
import { getEventsLoadingState, fetchEventsFromAPI } from '../../../redux/eventsRedux';
import { getBookingsLoadingState, fetchBookingsFromAPI } from '../../../redux/bookingsRedux';
import { changeView } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  localOrdersLoading: getLocalOrdersLoadingState(state),
  deliveryOrdersLoading: getDeliveryOrdersLoadingState(state),
  eventsLoading: getEventsLoadingState(state),
  bookingsLoading: getBookingsLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchLocalOrders: () => dispatch(fetchLocalOrdersFromAPI()),
  fetchDeliveryOrders: () => dispatch(fetchDeliveryOrdersFromAPI()),
  fetchEvents: () => dispatch(fetchEventsFromAPI()),
  fetchBookings: () => dispatch(fetchBookingsFromAPI()),
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);