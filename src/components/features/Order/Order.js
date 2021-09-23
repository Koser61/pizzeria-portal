import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

class Order extends React.Component {
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
          <p>Loading...</p>
        </Container>
      );
    } else if(error) {
      return (
        <Container>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Container>
      );
    } else {
      return (
        <Container>
          <p>ORDER</p>
        </Container>
      );
    }
  }
}

export default Order;