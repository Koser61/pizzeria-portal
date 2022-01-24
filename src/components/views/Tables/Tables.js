import React from 'react';
import PropTypes from 'prop-types';
//import { Route, Switch } from 'react-router-dom';

import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';

import { tables } from '../../../settings';

//import Booking from '../Booking/Booking';
//import Event from '../Event/Event';
import TableHourColumn from '../../features/TableHourColumn/TableHourColumn';
import TableColumn from '../../features/TableColumn/TableColumn';

class Tables extends React.Component {
  static propTypes = {
    eventsLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchEvents: PropTypes.func,
    bookingsLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchBookings: PropTypes.func,
  }

  componentDidMount() {
    const { fetchEvents, fetchBookings } = this.props;

    fetchEvents();
    fetchBookings();
  }

  render() {
    const { eventsLoading, bookingsLoading } = this.props;

    if(eventsLoading.active && bookingsLoading.active) {
      return (
        <Container>
          <Backdrop open={eventsLoading.active && bookingsLoading.active}>
            <CircularProgress sx={{color: 'white'}} />
          </Backdrop>
        </Container>
      );
    } else if(eventsLoading.error || bookingsLoading.error) {
      return (
        <Container>
          {eventsLoading.error &&
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {eventsLoading.error}
              </Alert>
            </Box>}
          {bookingsLoading.error &&
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {bookingsLoading.error}
              </Alert>
            </Box>}
        </Container>
      );
    } else {
      const openHour = '12:00';
      const workingHours = 12;
      const tableRows = workingHours * 2 + 1;
      const cellHeight = 45;

      return (
        <Container>
          <Box justifyContent='center' sx={{ my: {xs: 2, sm: 3, md: 4} }}>
            <Grid container marginX='auto' maxWidth='700px'>
              <TableHourColumn
                tableRows={tableRows}
                openHour={openHour}
                cellHeight={cellHeight}
              />
              {tables.map((table, i) => {
                const thisTableisLast = table === tables[tables.length - 1];

                return (
                  <React.Fragment key={i}>
                    <TableColumn
                      table={table}
                      borderRight={thisTableisLast}
                      tableRows={tableRows}
                      cellHeight={cellHeight}
                    />
                  </React.Fragment>
                );
              })}
            </Grid>
          </Box>
          
          {/*
            <Switch>
              <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
              <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
            </Switch>
          */}
        </Container>
      );
    }
  }
}

export default Tables;