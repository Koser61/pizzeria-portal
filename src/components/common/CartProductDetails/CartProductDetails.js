import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

import CartProductParams from '../CartProductParams/CartProductParams';

const CartProductDetails = ({ name, params }) => {
  if(Object.keys(params).length === 0) {
    return (
      <Box mx='1rem'>
        <Typography fontWeight='bold'>{name}</Typography>
      </Box>
    );
  } else {
    return (
      <Box mx='1rem'>
        <Typography fontWeight='bold'>{name}</Typography>
        <CartProductParams params={params} />
      </Box>
    );
  }
};

CartProductDetails.propTypes = {
  name: PropTypes.string,
  params: PropTypes.object,
};

export default CartProductDetails;