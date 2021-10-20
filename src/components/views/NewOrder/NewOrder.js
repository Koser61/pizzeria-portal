import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import OrderOptions from '../../features/OrderOptions/OrderOptions';
import OrderMenu from '../../features/OrderMenu/OrderMenu';
import OrderCart from '../../features/OrderCart/OrderCart';

class NewOrder extends React.Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { loading: { active, error }, products } = this.props;

    if(active || !products.length){
      return (
        <Container>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='75vh'
          >
            <CircularProgress />
          </Box>
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
          <Box maxWidth='lg' mx='auto' py='1rem'>
            <OrderOptions />
            <OrderMenu products={products} />
            <OrderCart />
          </Box>
        </Container>
      );
    }
  }
}

export default NewOrder;