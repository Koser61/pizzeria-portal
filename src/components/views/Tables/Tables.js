import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route, Switch} from 'react-router-dom';

import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Booking from '../Booking/Booking';
import Event from '../Event/Event';

class Tables extends React.Component {
  static propTypes = {
    eventsRepeatLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchRepeatEvents: PropTypes.func,
    eventsNoRepeatLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchNoRepeatEvents: PropTypes.func,
    bookingsLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchBookings: PropTypes.func,
  }

  componentDidMount() {
    const { fetchRepeatEvents, fetchNoRepeatEvents, fetchBookings } = this.props;

    fetchRepeatEvents();
    fetchNoRepeatEvents();

    fetchBookings();
  }

  render() {
    const { eventsRepeatLoading, eventsNoRepeatLoading, bookingsLoading } = this.props;

    if(eventsRepeatLoading.active && eventsNoRepeatLoading.active && bookingsLoading.active) {
      return (
        <Container>
          <Backdrop open={eventsRepeatLoading.active && eventsNoRepeatLoading.active && bookingsLoading.active}>
            <CircularProgress sx={{color: 'white'}} />
          </Backdrop>
        </Container>
      );
    } else if(eventsRepeatLoading.error || eventsNoRepeatLoading.error || bookingsLoading.error) {
      return (
        <Container>
          {eventsRepeatLoading.error  ? 
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {eventsRepeatLoading.error}
              </Alert>
            </Box>
          : ''}
          {eventsNoRepeatLoading.error  ? 
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {eventsNoRepeatLoading.error}
              </Alert>
            </Box>
          : ''}
          {bookingsLoading.error  ? 
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {bookingsLoading.error}
              </Alert>
            </Box>
          : ''}
        </Container>
      );
    } else {
      return (
        <Container>
          <h2>Tables view</h2>
          <Link to={process.env.PUBLIC_URL + '/tables/booking/123abc'}>Booking</Link>
          <Link to={process.env.PUBLIC_URL + '/tables/event/321abc'}>Event</Link>
          <div>
            <Switch>
              <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
              <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
            </Switch>
          </div>
        </Container>
      );
    }
  }
}

export default Tables;