import { connect } from 'react-redux'
import ReservationStartersCheckboxes from './ReservationStartersCheckboxes';
import { getEventStartersById } from '../../../redux/eventsRedux';
import { getBookingStartersById } from '../../../redux/bookingsRedux';
import {
  getBreadStarter,
  getLemonWaterStarter,
  changeBreadStarter,
  changeLemonWaterStarter
} from '../../../redux/reservationRedux';

const mapStateToProps = (state, { type, id }) => {
  if (type === 'event') {
    return {
      initialData: getEventStartersById(state, id),
      bread: getBreadStarter(state),
      lemonWater: getLemonWaterStarter(state),
    }
  } else if (type === 'booking') {
    return {
      initialData: getBookingStartersById(state, id),
      bread: getBreadStarter(state),
      lemonWater: getLemonWaterStarter(state),
    }
  }
};

const mapDispatchToProps = (dispatch, { type }) => {
  if (type === 'event') {
    return {
      changeBread: (bool) => dispatch(changeBreadStarter(bool)),
      changeLemonWater: (bool) => dispatch(changeLemonWaterStarter(bool)),
    };
  } else if (type === 'booking') {
    return {
      changeBread: (bool) => dispatch(changeBreadStarter(bool)),
      changeLemonWater: (bool) => dispatch(changeLemonWaterStarter(bool)),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationStartersCheckboxes);