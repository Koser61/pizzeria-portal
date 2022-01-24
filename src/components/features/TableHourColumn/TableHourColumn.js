import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';

import TableHour from '../../common/TableHour/TableHour';

const TableHourColumn = ({ tableRows, openHour, cellHeight }) => {
  return (
    <Grid item xs={3}>
      {[...Array(tableRows)].map((value, i) => (
        <TableHour
          key={i}
          id={i + 1}
          openHour={openHour}
          cellHeight={cellHeight}
        />
      ))}
    </Grid>
  );
};

TableHourColumn.propTypes = {
  tableRows: PropTypes.number.isRequired,
  openHour: PropTypes.string.isRequired,
  cellHeight: PropTypes.number.isRequired,
};

export default TableHourColumn;