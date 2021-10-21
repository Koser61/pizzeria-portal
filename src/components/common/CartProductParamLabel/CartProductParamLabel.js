import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

const CartProductParamLabel = ({ label }) => {
  return (
    <Typography
      fontStyle='italic'
      variant='subtitle2'
      component='span'
    >
      {label}:&nbsp;
    </Typography>
  );
};

CartProductParamLabel.propTypes = {
  label: PropTypes.string,
};

export default CartProductParamLabel;
