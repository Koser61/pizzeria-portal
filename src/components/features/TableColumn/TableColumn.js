import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';

import TableCell from '../TableCell/TableCell';

const TableColumn = ({ table, borderRight, tableRows, cellHeight }) => {
  return (
    <Grid item xs={3}>
      {[...Array(tableRows)].map(
        (value, i) => (
          <TableCell key={i} id={i + 1} table={table} borderRight={borderRight} cellHeight={cellHeight} />
        )
      )}
    </Grid>
  );
};

TableColumn.propTypes = {
  table: PropTypes.object.isRequired,
  borderRight: PropTypes.bool,
  tableRows: PropTypes.number.isRequired,
  cellHeight: PropTypes.number.isRequired,
};

export default TableColumn;