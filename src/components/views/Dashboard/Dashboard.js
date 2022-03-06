import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import DashboardSummary from '../../features/DashboardSummary/DashboardSummary';

class Dashboard extends React.Component {
  static propTypes = {
    fetchOrders: PropTypes.func,
    ordersLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchEvents: PropTypes.func,
    eventsLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchBookings: PropTypes.func,
    bookingsLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount() {
    const { fetchOrders, fetchEvents, fetchBookings } = this.props;

    fetchOrders();
    fetchEvents();
    fetchBookings();
  }

  render() {
    const { ordersLoading, eventsLoading, bookingsLoading } = this.props;
    
    if(ordersLoading.active && eventsLoading.active && bookingsLoading.active) {
      return (
        <Container>
          <Backdrop open={ordersLoading.active && eventsLoading.active && bookingsLoading.active}>
            <CircularProgress sx={{color: 'white'}} />
          </Backdrop>
        </Container>
      );
    } else if(ordersLoading.error || eventsLoading.error || bookingsLoading.error) {
      return (
        <Container>
          {ordersLoading.error &&
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {ordersLoading.error}
              </Alert>
            </Box>}
          {eventsLoading.error &&
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {eventsLoading.error}
              </Alert>
            </Box>}
          {bookingsLoading.error &&
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {bookingsLoading.error}
              </Alert>
            </Box>}
        </Container>
      );
    } else {
      return (
        <Container>
          <DashboardSummary />
        </Container>
      );
    }
  }
}

export default Dashboard;