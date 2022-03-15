import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import DashboardSummary from '../../features/DashboardSummary/DashboardSummaryContainer';

class Dashboard extends React.Component {
  static propTypes = {
    fetchLocalOrders: PropTypes.func,
    localOrdersLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchDeliveryOrders: PropTypes.func,
    deliveryOrdersLoading: PropTypes.shape({
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
    changeView: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { changeView, fetchLocalOrders, fetchDeliveryOrders, fetchEvents, fetchBookings } = this.props;

    changeView('Dashboard');
    fetchLocalOrders();
    fetchDeliveryOrders();
    fetchEvents();
    fetchBookings();
  }

  render() {
    const { localOrdersLoading, deliveryOrdersLoading, eventsLoading, bookingsLoading } = this.props;

    const dataLoadingActive = localOrdersLoading.active && deliveryOrdersLoading.active &&
                                   eventsLoading.active && bookingsLoading.active;
    const dataLoadingError = localOrdersLoading.error || deliveryOrdersLoading.error ||
                                  eventsLoading.error || bookingsLoading.error;
    
    if(dataLoadingActive) {
      return (
        <Container>
          <Backdrop open={dataLoadingActive}>
            <CircularProgress sx={{color: 'white'}} />
          </Backdrop>
        </Container>
      );
    } else if(dataLoadingError) {
      return (
        <Container>
          {localOrdersLoading.error &&
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {localOrdersLoading.error}
              </Alert>
            </Box>}
          {deliveryOrdersLoading.error &&
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {deliveryOrdersLoading.error}
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