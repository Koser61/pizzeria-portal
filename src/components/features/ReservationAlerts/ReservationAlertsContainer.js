import { connect } from 'react-redux'
import ReservationAlerts from './ReservationAlerts';
import {
  getAlertSuccess,
  getShowPeriods,
  getAvailablePeriods,
  setAlertSuccess,
  setShowPeriods
} from '../../../redux/reservationRedux';

const mapStateToProps = (state) => ({
  alertSuccess: getAlertSuccess(state),
  showPeriods: getShowPeriods(state),
  availablePeriods: getAvailablePeriods(state),
});

const mapDispatchToProps = (dispatch) => ({
  setAlertSuccess: (bool) => dispatch(setAlertSuccess(bool)),
  setShowPeriods: (bool) => dispatch(setShowPeriods(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationAlerts);