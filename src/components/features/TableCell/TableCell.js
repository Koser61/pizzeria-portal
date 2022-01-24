import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { grey } from '@mui/material/colors';

import ReservationTile from '../../common/ReservationTile/ReservationTile';

const TableCell = ({ id, table, borderRight, cellHeight }) => {
  return (
    <>
      {id === 1 ? (
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
      ) : (
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
          {table.value === 'table2' && id === 3 && (
            <ReservationTile cellHeight={cellHeight} />
          )}
        </Box>
      )}
    </>
  );
};

TableCell.propTypes = {
  id: PropTypes.number.isRequired,
  table: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  borderRight: PropTypes.bool,
  cellHeight: PropTypes.number.isRequired,
};

export default TableCell;