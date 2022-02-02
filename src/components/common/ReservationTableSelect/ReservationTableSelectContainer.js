import { connect } from 'react-redux'
import ReservationTableSelect from './ReservationTableSelect';
import { getEventTableById } from '../../../redux/eventsRedux';
import { getBookingTableById } from '../../../redux/bookingsRedux';
import { getTable, changeTable } from '../../../redux/reservationRedux';

const mapStateToProps = (state, { type, id }) => {
  if (type === 'event') {
    return {
      initialTable: getEventTableById(state, id),
      table: getTable(state),
    }
  } else if (type === 'booking') {
    return {
      initialTable: getBookingTableById(state, id),
      table: getTable(state),
    }
  }
};

const mapDispatchToProps = (dispatch, { type }) => {
  if (type === 'event') {
    return {
      changeTable: (newTable) => dispatch(changeTable(newTable)),
    };
  } else if (type === 'booking') {
    return {
      changeTable: (newTable) => dispatch(changeTable(newTable)),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationTableSelect);