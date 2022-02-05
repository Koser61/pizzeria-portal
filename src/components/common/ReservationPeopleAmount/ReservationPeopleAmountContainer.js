import { connect } from 'react-redux'
import ReservationPeopleAmount from './ReservationPeopleAmount';
import { getEventPplById } from '../../../redux/eventsRedux';
import { getBookingPplById } from '../../../redux/bookingsRedux';
import { getPeople, changePeople } from '../../../redux/reservationRedux';

const mapStateToProps = (state, { type, id }) => {
  if (type === 'event') {
    return {
      initialPeopleAmount: getEventPplById(state, id),
      peopleAmount: getPeople(state),
    }
  } else if (type === 'booking') {
    return {
      initialPeopleAmount: getBookingPplById(state, id),
      peopleAmount: getPeople(state),
    }
  }
};

const mapDispatchToProps = (dispatch, { type }) => {
  if (type === 'event') {
    return {
      changePeopleAmount: (newPeopleAmount) => dispatch(changePeople(newPeopleAmount)),
    };
  } else if (type === 'booking') {
    return {
      changePeopleAmount: (newPeopleAmount) => dispatch(changePeople(newPeopleAmount)),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationPeopleAmount);