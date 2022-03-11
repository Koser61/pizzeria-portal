import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import OrderOptions from '../../features/OrderOptions/OrderOptions';
import OrderMenu from '../../features/OrderMenu/OrderMenu';
import OrderCart from '../../features/OrderCart/OrderCartContainer';

class NewOrder extends React.Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    changeOrderWasSent: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    changeView: PropTypes.func,
  }

  componentDidMount(){
    const { changeView, fetchProducts, changeOrderWasSent } = this.props;
    
    changeView('New Order');
    fetchProducts();
    changeOrderWasSent(false);
  }

  render() {
    const { loading: { active, error }, products, match } = this.props;

    if(active || !products.length){
      return (
        <Container>
          <Backdrop open={active || !products.length}>
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
          <Grid container spacing='0.5rem' mt='0.5rem' mb='1rem'>
            <Grid item container xs={12} md={7} spacing='0.5rem'>
              <Grid item width={1/1}>
                <OrderOptions tableMatch={match.params.table} />
              </Grid>
              <Grid item width={1/1}>
                <OrderMenu products={products} />
              </Grid>
            </Grid>
            <Grid item container xs={12} md={5} spacing='1rem'>
              <Grid item width={1/1} marginLeft={{md: '0.5rem'}}>
                <OrderCart />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      );
    }
  }
}

export default NewOrder;