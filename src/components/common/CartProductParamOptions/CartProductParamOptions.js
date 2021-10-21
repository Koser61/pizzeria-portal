import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

const CartProductParamOptions = ({ options }) => {
  return (
    <Typography
      fontStyle='italic'
      variant='body2'
      component='span'
    >
      {Object.values(options).map((option, i) => {
        return (
          <React.Fragment key={i}>
            {option + ', '}
          </React.Fragment>
        );
      })}
    </Typography>
  );
};

CartProductParamOptions.propTypes = {
  options: PropTypes.object,
};

export default CartProductParamOptions;
