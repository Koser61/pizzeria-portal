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
    fetchOrders: PropTypes.func,
    changeStatusHasChanged: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount() {
    const { fetchOrders, changeStatusHasChanged } = this.props;
    
    fetchOrders();
    changeStatusHasChanged(false);
  }

  render() {
    const { loading: { active, error }, allOrders } = this.props;

    if(active || !allOrders.length){
      return (
        <Container>
          <Backdrop open={active || !allOrders.length}>
            <CircularProgress sx={{color: 'white'}} />
          </Backdrop>
        </Container>
      );
    } else if(error) {
      return (
        <Container>
          <Box width={1/1} py='1rem'>
            <Alert severity='error' mt='2rem'>
              <AlertTitle>Error!</AlertTitle>
              {error}
            </Alert>
          </Box>
        </Container>
      );
    } else {
      return (
        <Container>
          <Grid container my={0.5} spacing={2}>
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