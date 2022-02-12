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
  saveDataChangesInAPI
} from '../../../redux/reservationRedux';

const mapStateToProps = (state) => ({
  date: getDate(state),
  hour: getHour(state),
  table: getTable(state),
  repeat: getRepeat(state),
  duration: getDuration(state),
  ppl: getPeople(state),
  breadStarter: getBreadStarter(state),
  lemonWaterStarter: getLemonWaterStarter(state),
});

const mapDispatchToProps = (dispatch, { type, id }) => ({
  saveDataChanges: (changedData) => dispatch(saveDataChangesInAPI(type, id, changedData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationSubmitButton);