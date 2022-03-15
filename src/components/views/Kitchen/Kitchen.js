import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';

import KitchenOrders from '../../features/KitchenOrders/KitchenOrdersContainer';

class Kitchen extends React.Component {
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
    changeStatusHasChanged: PropTypes.func,
    changeView: PropTypes.func,
  }

  componentDidMount() {
    const { changeView, fetchLocalOrders, fetchDeliveryOrders, changeStatusHasChanged } = this.props;
    
    changeView('Kitchen');
    fetchLocalOrders();
    fetchDeliveryOrders();
    changeStatusHasChanged(false);
  }

  render() {
    const { localOrdersLoading, deliveryOrdersLoading } = this.props;

    const dataLoadingActive = localOrdersLoading.active && deliveryOrdersLoading.active;
    const dataLoadingError = localOrdersLoading.error || deliveryOrdersLoading.error;

    if(dataLoadingActive){
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
        </Container>
      );
    } else {
      return (
        <Container>
          <Grid container mb={2} spacing={2}>
            <Grid item xs={12} sm={6}>
              <KitchenOrders title='Local Orders' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <KitchenOrders delivery title='Delivery Orders' />
            </Grid>
          </Grid>
        </Container>
      );
    }
  }
}

export default Kitchen;