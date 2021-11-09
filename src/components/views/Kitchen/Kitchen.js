import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

class Kitchen extends React.Component {
  static propTypes = {
    fetchOrders: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount() {
    const { fetchOrders } = this.props;
    fetchOrders();
  }

  render() {
    const { loading: { active, error }, orders } = this.props;

    if(active || !orders.length){
      return (
        <Container>
          <Backdrop open={active || !orders.length}>
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
          <div></div>
        </Container>
      );
    }
  }
}

export default Kitchen;