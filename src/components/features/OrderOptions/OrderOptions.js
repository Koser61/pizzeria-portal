import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import OrderTableSelect from '../../common/OrderTableSelect/OrderTableSelectContainer';
import OrderTimePicker from '../../common/OrderTimePicker/OrderTimePickerContainer';

const OrderOptions = () => {
  return (
    <Card elevation={6} sx={{paddingBottom: '1rem'}}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            display='flex'
            justifyContent='center'
            alignContent='center'
            mt='1rem'
          >
            <OrderTableSelect />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            display='flex'
            justifyContent='center'
            alignContent='center'
            mt='1rem'
          >
            <OrderTimePicker />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OrderOptions;
