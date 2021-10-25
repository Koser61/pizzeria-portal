import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
//import Box from '@mui/material/Box';

import OrderTableSelect from '../../common/OrderTableSelect/OrderTableSelectContainer';
import OrderTimePicker from '../../common/OrderTimePicker/OrderTimePickerContainer';

const OrderOptions = () => {
  return (
    <Card elevation={6} sx={{p: '0.5rem', pb: '1rem'}}>
      <Grid container>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <Grid item marginTop={{xs: '0.5rem'}}>
            <OrderTableSelect />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <Grid item marginTop={{xs: '1rem', sm: '0.5rem'}}>
            <OrderTimePicker />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OrderOptions;
