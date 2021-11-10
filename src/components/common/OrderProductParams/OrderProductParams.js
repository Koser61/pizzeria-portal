import React from 'react';
import PropTypes from 'prop-types';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import OrderProductParamOptions from '../OrderProductParamOptions/OrderProductParamOptions';

const OrderProductParams = ({ params }) => {
  return (
    <>
      <Divider />
      <Box p='0.5rem'>
        {Object.values(params).map((param, i) => {
          return (
            <Box key={i} pb='0.25rem'>
              <Typography component='span' variant='subtitle2' fontStyle='italic'>
                {param.label + ':'}&nbsp;
              </Typography>
              <Typography component='span' variant='body2' fontStyle='italic'>
                <OrderProductParamOptions options={param.options} />
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

OrderProductParams.propTypes = {
  params: PropTypes.object,
};

export default OrderProductParams;
