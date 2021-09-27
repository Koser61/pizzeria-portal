import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Paper from '@mui/material/Paper';

import OrderOptions from '../../common/OrderOptions/OrderOptionsContainer';
import OrderMenu from '../../common/OrderMenu/OrderMenuContainer';

class NewOrder extends React.Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
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
          <Box width={1/1} marginTop='1rem'>
            <Alert severity="error" marginTop='2rem'>
              <AlertTitle>Error!</AlertTitle>
              {error}
            </Alert>
          </Box>
        </Container>
      );
    } else {
      return (
        <Container>
          <Paper elevation={3} sx={{marginTop: '1rem', padding: '0.5rem'}}>
            <OrderOptions />
            <OrderMenu products={products} />
          </Paper>
        </Container>
      );
    }
  }
}

export default NewOrder;