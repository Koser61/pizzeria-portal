import { connect } from 'react-redux'
import TableCell from './TableCell';
import { getMatchingEvent } from '../../../redux/eventsRedux';
import { getMatchingBooking } from '../../../redux/bookingsRedux';

const mapStateToProps = (state, {table, cellHour}) => ({
  event: getMatchingEvent(state, table, cellHour),
  booking: getMatchingBooking(state, table, cellHour),
});

export default connect(mapStateToProps)(TableCell);