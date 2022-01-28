import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import Grid from '@mui/material/Grid';

import TableCell from '../TableCell/TableCellContainer';

const TableColumn = ({ table, borderRight, tableRows, openHour, timeInterval, cellHeight }) => {
  return (
    <Grid item xs={3}>
      {[...Array(tableRows)].map(
        (value, i) => {
          if (i === 0) {
            return (
              <TableCell
                key={i}
                id={i + 1}
                table={table}
                borderRight={borderRight}
                cellHeight={cellHeight}
              />
            );
          } else {
            const timeIntervalInMinutes = timeInterval * 60;
            let minutesToAdd = 0;

            i === 1 ? minutesToAdd = 0 : minutesToAdd = (i - 1) * timeIntervalInMinutes;

            const cellHour = DateTime.fromISO(openHour)
              .plus({ minutes: minutesToAdd })
              .toLocaleString(DateTime.TIME_SIMPLE);

            return (
              <TableCell
                key={i}
                id={i + 1}
                table={table}
                cellHour={cellHour}
                borderRight={borderRight}
                cellHeight={cellHeight}
                timeInterval={timeInterval}
              />
            );
          }
        }
      )}
    </Grid>
  );
};

TableColumn.propTypes = {
  table: PropTypes.object.isRequired,
  tableRows: PropTypes.number.isRequired,
  openHour: PropTypes.string.isRequired,
  timeInterval: PropTypes.number.isRequired,
  cellHeight: PropTypes.number.isRequired,
  borderRight: PropTypes.bool,
};

export default TableColumn;