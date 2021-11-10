import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import OrderProductParams from '../OrderProductParams/OrderProductParams';

const OrderProduct = ({amount, name, params}) => {
  const isEmpty = (object) => {
    if(Object.getOwnPropertyNames(object).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Card variant='outlined'>
      <Box display='flex' justifyContent='center' py='0.5rem'>
        <Typography component='span' variant='body1' fontWeight='bold'>
          {amount}&nbsp;
        </Typography>
        <Typography component='span' variant='body1'>
          {'x ' + name}
        </Typography>
      </Box>
      {isEmpty(params) ? <></> : <OrderProductParams params={params} />}
    </Card>
  );
};

OrderProduct.propTypes = {
  amount: PropTypes.number,
  name: PropTypes.string,
  params: PropTypes.object,
};

export default OrderProduct;