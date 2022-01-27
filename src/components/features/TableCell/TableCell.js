import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { grey } from '@mui/material/colors';

//import ReservationTile from '../../common/ReservationTile/ReservationTile';

const TableCell = ({ id, table, borderRight, cellHeight, event, booking }) => {
  return (
    <>
      {id === 1 ?
        <Box
          height={cellHeight}
          borderLeft='1px solid'
          borderBottom='1px solid'
          borderRight={borderRight ? '1px solid' : 'none'}
          borderColor={grey[400]}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Typography
            sx={{ fontSize: { xs: '14px', sm: '16px' } }}
            variant='body2'
          >
            {table.label}
          </Typography>
        </Box>
       : 
        <Box
          height={cellHeight}
          position='relative'
          sx={{
            "::before": {
              content: '""',
              height: '100%',
              width: '100%',
              position: 'absolute',
              borderLeft: '1px solid',
              borderBottom: '1px solid',
              borderRight: borderRight ? '1px solid' : 'none',
              borderColor: grey[400],
              zIndex: 0,
            },
          }}
        >
          
        </Box>
      }
    </>
  );
};

TableCell.propTypes = {
  id: PropTypes.number.isRequired,
  table: PropTypes.shape({
    nr: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  cellHeight: PropTypes.number.isRequired,
  cellHour: PropTypes.string,
  borderRight: PropTypes.bool,
  event: PropTypes.object,
  booking: PropTypes.object,
};

export default TableCell;