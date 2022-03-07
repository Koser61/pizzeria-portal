import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DashboardTile = ({
  bgColor,
  title,
  firstValue,
  secondValue,
  icon,
  showCaption,
  firstValueCaption,
  secondValueCaption
}) => (
  <Card
    sx={{
      py: 2,
      px: {xs: 3, sm: 4},
      height: '100%',
      bgcolor: bgColor,
      color: 'white'
    }}
  >
    <Typography fontSize={18} sx={{ textTransform: 'uppercase' }}>
      {title}
    </Typography>
    <Box
      mt={1}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Typography fontSize={36} fontWeight='bold'>
        {secondValue ? `${firstValue} / ${secondValue}` : firstValue}
      </Typography>
      {icon}
    </Box>
    {showCaption &&
      <Typography variant='caption' fontSize={14}>
        {`${firstValueCaption} / ${secondValueCaption}`}
      </Typography>
    }
  </Card>
);

DashboardTile.propTypes = {
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  firstValue: PropTypes.number.isRequired,
  secondValue: PropTypes.number,
  icon: PropTypes.element.isRequired,
  showCaption: PropTypes.bool,
  firstValueCaption: PropTypes.string,
  secondValueCaption: PropTypes.string
};

export default DashboardTile;