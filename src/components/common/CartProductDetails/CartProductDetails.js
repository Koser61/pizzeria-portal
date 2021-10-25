import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import CartProductParamOptions from '../CartProductParamOptions/CartProductParamOptions';

const CartProductDetails = ({ params }) => {
  const paramsSize = Object.getOwnPropertyNames(params).length;
  
  if(paramsSize !== 0) {
    return (
      <React.Fragment>
        <Divider />
        <Box px='1rem' py='0.25rem'>
          {Object.values(params).map((param, i) => {
            return (
              <Box key={i} my='0.25rem'>
                <Typography
                  fontWeight='bold'
                  variant='subtitle2'
                  component='span'
                >
                  {param.label}:&nbsp;
                </Typography>
                <CartProductParamOptions options={param.options} />
              </Box>
            );
          })}
        </Box>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment></React.Fragment>
    );
  }
};

CartProductDetails.propTypes = {
  productId: PropTypes.number,
  params: PropTypes.object,
};

export default CartProductDetails;