import { connect } from 'react-redux';
import ReservationSubmitButton from './ReservationSubmitButton';
import { 
  getDate,
  getHour,
  getTable,
  getRepeat,
  getDuration,
  getPeople,
  getBreadStarter,
  getLemonWaterStarter,
  fetchTableReservationsFromAPI,
  saveDataChangesInAPI
} from '../../../redux/reservationRedux';
import { getEventRepeatById } from '../../../redux/eventsRedux';

const mapStateToProps = (state, { id }) => ({
  date: getDate(state),
  hour: getHour(state),
  table: getTable(state),
  repeat: getRepeat(state),
  duration: getDuration(state),
  ppl: getPeople(state),
  breadStarter: getBreadStarter(state),
  lemonWaterStarter: getLemonWaterStarter(state),
  initialRepeat: getEventRepeatById(state, id),
});

const mapDispatchToProps = (dispatch, { type, id }) => ({
  fetchTableReservations: (table, date, initialRepeat) => dispatch(fetchTableReservationsFromAPI(type, id, table, date, initialRepeat)),
  saveDataChanges: (changedData) => dispatch(saveDataChangesInAPI(type, id, changedData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationSubmitButton);