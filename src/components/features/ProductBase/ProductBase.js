import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import AmountWidget from '../../common/AmountWidget/AmountWidget';

const ProductBase = ({name}) => {
  return (
    <Box
      width={1 / 1}
      display='inline-flex'
      justifyContent='space-between'
      alignItems='center'
      sx={{ paddingX: '1rem', paddingY: '0.5rem' }}
    >
      <Typography variant='h6'>{name}</Typography>
      <Box display='inline-flex' alignItems='center'>
        <AmountWidget />
        <Button variant='contained' sx={{ height: 64, borderRadius: 2 }}>
          <AddShoppingCartIcon />
        </Button>
      </Box>
    </Box>
  );
};

ProductBase.propTypes = {
  name: PropTypes.string,
};

export default ProductBase;
