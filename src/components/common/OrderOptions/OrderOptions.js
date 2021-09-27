import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DateAdapter from '@mui/lab/AdapterLuxon';

import { DateTime } from 'luxon';

class OrderOptions extends React.Component {
  static propTypes = {
    orderTime: PropTypes.object,
    changeOrderTime: PropTypes.func,
    table: PropTypes.string,
    changeTable: PropTypes.func,
  }

  componentDidMount() {
    const { changeOrderTime } = this.props;
    changeOrderTime(DateTime.now());
  }

  render() {
    const { 
      orderTime, changeOrderTime, table, changeTable 
    } = this.props;

    return (
      <Card variant='outlined' sx={{padding: '0.5rem'}}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              sx={{margin: '0.5rem'}}
            >
              <FormControl>
                <InputLabel id="tableSelectLabel">Table</InputLabel>
                <Select
                  labelId="tableSelectLabel"
                  id="tableSelect"
                  value={table}
                  label="Table"
                  onChange={(event) => {
                    changeTable(event.target.value);
                  }}
                  sx={{width: 210}}
                >
                  <MenuItem value={'table1'}>Table 1</MenuItem>
                  <MenuItem value={'table2'}>Table 2</MenuItem>
                  <MenuItem value={'table3'}>Table 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              sx={{margin: '0.5rem'}}
            >
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Order Time"
                  value={orderTime}
                  onChange={(newOrderTime) => {
                    changeOrderTime(newOrderTime);
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default OrderOptions;