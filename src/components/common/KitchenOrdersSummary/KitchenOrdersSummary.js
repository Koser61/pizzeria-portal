import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

const KitchenOrdersSummary = ({ delivery, title }) => {
  return (
    <>
      <Box
        display='inline-flex'
        justifyContent='center'
        alignItems='center'
      >
        <Icon color='action' sx={{mr: '0.75rem'}}>
          {delivery ? <LocalShippingOutlinedIcon /> : <StoreOutlinedIcon />}
        </Icon>
        <Typography variant='h6'>
          {title}
        </Typography>
      </Box>
    </>
  );
};

KitchenOrdersSummary.propTypes = {
  delivery: PropTypes.bool,
  title: PropTypes.string,
};

export default KitchenOrdersSummary;