import React from 'react';
//import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AmountWidget = () => {
  return (
    <Grid container paddingRight='1rem'>
      <Grid item xs={12} sm={4} sx={{order: {xs: 1, sm: 3}}}>
        <Box display='flex' justifyContent='center'>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} order={2} alignSelf='center'>
        <Box display='flex' justifyContent='center'>
          <Card
            variant='outlined'
            sx={{
              height: '2rem',
              width: '2rem',
              display: 'flex', 
              justifyContent: 'center',
              alignContent: 'center',
              lineHeight: '2rem',
              margin: '0.1rem'
            }}
          >
            1
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} sx={{order: {xs: 3, sm: 1}}}>
        <Box display='flex' justifyContent='center'>
          <IconButton>
            <RemoveIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

AmountWidget.propTypes = {};

export default AmountWidget;