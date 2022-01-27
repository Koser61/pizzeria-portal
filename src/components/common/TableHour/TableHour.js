import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { grey } from '@mui/material/colors';

const TableHour = ({ id, openHour, cellHeight }) => {
  if (id % 2 !== 0) {
    let hoursToAdd = 0;

    id === 1 ? (hoursToAdd = 0) : (hoursToAdd = (id - 1) / 2);
    
    const displayedHour = DateTime.fromISO(openHour)
      .plus({ hours: hoursToAdd })
      .toLocaleString(DateTime.TIME_SIMPLE);

    return (
      <Box
        height={cellHeight}
        borderBottom='1px solid'
        borderColor={grey[400]}
        position='relative'
      >
        <Box
          backgroundColor='white'
          position='absolute'
          sx={{ top: { xs: '33px', sm: '32px' } }}
        >
          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '16px' },
              mr: { xs: 1, sm: 2 },
            }}
          >
            {displayedHour}
          </Typography>
        </Box>
      </Box>
    );
  } else {
    return <Box height='45px' border='none' />;
  }
};

TableHour.propTypes = {
  id: PropTypes.number.isRequired,
  openHour: PropTypes.string.isRequired,
  cellHeight: PropTypes.number.isRequired,
};

export default TableHour;