import React from 'react';
import PropTypes from 'prop-types';
//import {Link, Route, Switch} from 'react-router-dom';
import { DateTime } from 'luxon';

import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import EventIcon from '@mui/icons-material/Event'; // single event
//import EventRepeatIcon from '@mui/icons-material/EventRepeat'; // repeating event
//import EventNoteIcon from '@mui/icons-material/EventNote'; // booking

import { grey } from '@mui/material/colors';

//import Booking from '../Booking/Booking';
//import Event from '../Event/Event';

import { tables } from '../../../settings';

class Tables extends React.Component {
  static propTypes = {
    eventsRepeatLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchRepeatEvents: PropTypes.func,
    eventsNoRepeatLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchNoRepeatEvents: PropTypes.func,
    bookingsLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    fetchBookings: PropTypes.func,
  }

  componentDidMount() {
    const { fetchRepeatEvents, fetchNoRepeatEvents, fetchBookings } = this.props;

    fetchRepeatEvents();
    fetchNoRepeatEvents();

    fetchBookings();
  }

  render() {
    const { eventsRepeatLoading, eventsNoRepeatLoading, bookingsLoading } = this.props;

    if(eventsRepeatLoading.active && eventsNoRepeatLoading.active && bookingsLoading.active) {
      return (
        <Container>
          <Backdrop open={eventsRepeatLoading.active && eventsNoRepeatLoading.active && bookingsLoading.active}>
            <CircularProgress sx={{color: 'white'}} />
          </Backdrop>
        </Container>
      );
    } else if(eventsRepeatLoading.error || eventsNoRepeatLoading.error || bookingsLoading.error) {
      return (
        <Container>
          {eventsRepeatLoading.error ? 
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {eventsRepeatLoading.error}
              </Alert>
            </Box>
          : ''}
          {eventsNoRepeatLoading.error ? 
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {eventsNoRepeatLoading.error}
              </Alert>
            </Box>
          : ''}
          {bookingsLoading.error  ? 
            <Box width={1/1} py='1rem'>
              <Alert severity='error' mt='2rem'>
                <AlertTitle>Error!</AlertTitle>
                {bookingsLoading.error}
              </Alert>
            </Box>
          : ''}
        </Container>
      );
    } else {
      const openHour = '12:00';
      const workingHours = 12;
      const tableRows = workingHours * 2 + 1;
      const cellHeight = 45;

      const ReservationTile = () => {
        const reservationTileHeight = cellHeight * 6;

        return (
          <Card
            sx={{
              position: 'absolute',
              top: 0,
              left: '1px',
              bgcolor: 'black',
              height: reservationTileHeight * 0.97,
              width: {
                xs: '90%',
                sm: '94%',
              },
              color: 'white',
              borderRadius: 2,
              zIndex: 2
            }}
          >
            <Box
              height={cellHeight}
              display='inline-flex'
              alignItems='center'
              pl='12px'
            >
              <EventIcon />
            </Box>
          </Card>
        );
      };

      const TableHours = ({ id }) => {
        if (id % 2 !== 0) {
          let hoursToAdd = 0;

          id === 1 ? hoursToAdd = 0 : hoursToAdd = (id - 1) / 2

          const displayedHour = DateTime.fromISO(openHour).plus({hours: hoursToAdd}).toLocaleString(DateTime.TIME_SIMPLE);

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
                sx={{ top: {xs: '33px', sm: '32px'} }}
              >
                <Typography
                  sx={{
                    fontSize: {xs: '14px', sm: '16px'},
                    mr: {xs: 1, sm: 2}
                  }}
                >
                  {displayedHour} 
                </Typography>
              </Box>
            </Box>
          );
        } else {
          return (
            <Box
              height='45px'
              border='none'
            />
          );
        }
      };

      const TableCell = ({ id, table, borderRight }) => {
        

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
                <Typography sx={{ fontSize: {xs: '14px', sm: '16px'} }} variant='body2'>{table.label}</Typography>
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
                    zIndex: 0
                  }
                }}
              >
                {(table.value === 'table2' && id === 3) && <ReservationTile />}
              </Box>
              }
          </>
        );
        
      };

      const TableHoursColumn = () => {
        return (
          <Grid item xs={3}>
            {[...Array(tableRows)].map(
              (value, i) => (
                <TableHours key={i} id={i + 1} />
              )
            )}
          </Grid>
        );
      };

      const TableColumn = ({ table, borderRight }) => {
        return (
          <Grid item xs={3}>
            {[...Array(tableRows)].map(
              (value, i) => (
                <TableCell key={i} id={i + 1} table={table} borderRight={borderRight} />
              )
            )}
          </Grid>
        );
      };

      return (
        <Container>
          <Box justifyContent='center' sx={{ my: {xs: 2, sm: 3, md: 4} }}>
            <Grid container marginX='auto' maxWidth='700px'>
              <TableHoursColumn />
              {tables.map((table, i) => {
                const thisTableisLast = table === tables[tables.length -1];

                return (
                  <React.Fragment key={i}>
                    <TableColumn table={table} borderRight={thisTableisLast} />
                  </React.Fragment>
                );
              })}
            </Grid>
          </Box>
          
          {/*
            <h2>Tables view</h2>
            <Link to={process.env.PUBLIC_URL + '/tables/booking/123abc'}>Booking</Link>
            <Link to={process.env.PUBLIC_URL + '/tables/event/321abc'}>Event</Link>
            <div>
              <Switch>
                <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
                <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
              </Switch>
            </div>
          */}
        </Container>
      );
    }
  }
}

export default Tables;