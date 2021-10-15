import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import AmountWidget from '../../common/AmountWidget/AmountWidgetContainer';

const ProductBase = ({productId, name, price}) => {
  return (
    <Box
      width={1 / 1}
      display='inline-flex'
      justifyContent='space-between'
      alignItems='center'
      sx={{ padding: '0.5rem' }}
    >
      <Chip
        sx={{marginLeft: '0.5rem'}}
        color='primary'
        icon={<MonetizationOnIcon />}
        label={price}
      />
      <Typography variant='h6' marginLeft='1rem'>
        {name}
      </Typography>
      <Box display='inline-flex' alignItems='center'>
        <AmountWidget productId={productId} />
        <Button variant='contained' sx={{ height: 64, borderRadius: 2 }}>
          <AddShoppingCartIcon />
        </Button>
      </Box>
    </Box>
  );
};

ProductBase.propTypes = {
  productId: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductBase;
