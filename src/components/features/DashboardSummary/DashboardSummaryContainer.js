import { connect } from 'react-redux';
import DashboardSummary from './DashboardSummary';
import {
  getDoneDeliveryOrdersAmount,
  getTotalDeliveryOrdersAmount,
  getDoneLocalOrdersAmount,
  getTotalLocalOrdersAmount
} from '../../../redux/kitchenRedux';
import { getBookingsAmount } from '../../../redux/bookingsRedux';
import { getEventsAmount } from '../../../redux/eventsRedux';

const mapStateToProps = (state) => ({
  doneDeliveryOrders: getDoneDeliveryOrdersAmount(state),
  totalDeliveryOrders: getTotalDeliveryOrdersAmount(state),
  doneLocalOrders: getDoneLocalOrdersAmount(state),
  totalLocalOrders: getTotalLocalOrdersAmount(state),
  bookings: getBookingsAmount(state),
  events: getEventsAmount(state)
});

export default connect(mapStateToProps)(DashboardSummary);