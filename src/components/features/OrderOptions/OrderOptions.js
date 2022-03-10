import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import OrderTableSelect from '../../common/OrderTableSelect/OrderTableSelectContainer';
import OrderTimePicker from '../../common/OrderTimePicker/OrderTimePickerContainer';

const OrderOptions = ({ readOnly, tableMatch, orderTable, id }) => {
  return (
    <Card elevation={6} sx={{p: '0.5rem', pb: '1rem', mb: 1}}>
      <Grid container>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <Grid item marginTop={{xs: '0.5rem'}}>
            {readOnly ? <OrderTableSelect readOnly tableMatch={orderTable} />
                      : <OrderTableSelect tableMatch={tableMatch} />}
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <Grid item marginTop={{xs: '1rem', sm: '0.5rem'}}>
            {readOnly ? <OrderTimePicker readOnly id={id} />
                      : <OrderTimePicker />}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

OrderOptions.propTypes = {
  readOnly: PropTypes.bool,
  tableMatch: PropTypes.string,
  id: PropTypes.string,
};

export default OrderOptions;
