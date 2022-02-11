import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

import ReservationDatePicker from '../../common/ReservationDatePicker/ReservationDatePickerContainer';
import ReservationTimePicker from '../../common/ReservationTimePicker/ReservationTimePickerContainer';
import ReservationTableSelect from '../../common/ReservationTableSelect/ReservationTableSelectContainer';
import ReservationRepeatSelect from '../../common/ReservationRepeatSelect/ReservationRepeatSelectContainer';
import ReservationDurationAmount from '../../common/ReservationDurationAmount/ReservationDurationAmountContainer';
import ReservationPeopleAmount from '../../common/ReservationPeopleAmount/ReservationPeopleAmountContainer';
import ReservationStartersCheckboxes from '../../common/ReservationStartersCheckboxes/ReservationStartersCheckboxesContainer';
import ReservationSubmitButton from '../../common/ReservationSubmitButton/ReservationSubmitButtonContainer';

const Reservation = ({ type, id }) => {
  return (
    <Container sx={{ my: 2 }}>
      <Box maxWidth={900} mx='auto'>
        <Card elevation={6} sx={{ p: 1 }}>
          <Card variant='outlined' sx={{ p: 2 }}>
            <Grid container>
              <Grid container item xs={12} sm={6} justifyContent='center'>
                <Grid item mx={1}>
                  <ReservationDatePicker type={type} id={id} />
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} justifyContent='center'>
                <Grid item sx={{ mt: { xs: 2, sm: 0 } }} marginTop={2} mx={1}>
                  <ReservationTimePicker type={type} id={id} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
          <Card variant='outlined' sx={{ mt: 1, p: 2}}>
            <Grid container>
              <Grid item xs={12} sm={6} md={9}>
                <Box
                  width={1/1}
                  display='flex'
                  sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    mt: { xs: 0, md: 0.75 },
                  }}
                >
                  <Box width={1/1} maxWidth={246} mx='auto'>
                    <ReservationTableSelect type={type} id={id} />
                  </Box>
                  <Box width={1/1} maxWidth={246} mx='auto' sx={{ mt: {xs: 3, md: 0} }}>
                    <ReservationRepeatSelect type={type} id={id} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    height: {xs: 90, sm: '100%'},
                    alignItems: {xs: 'flex-end', sm: 'center'}
                  }}
                  display='flex'
                  justifyContent='center'
                >
                  <ReservationDurationAmount type={type} id={id} />
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Card variant='outlined' sx={{ mt: 1, p: 2 }}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box height={1/1} display='flex' justifyContent='center' alignItems='center'>
                  <ReservationPeopleAmount type={type} id={id} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <ReservationStartersCheckboxes type={type} id={id} />
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Divider sx={{ my: 2 }} />
          <Box width={1/1} display='inline-flex' justifyContent='flex-end'>
            <ReservationSubmitButton type={type} id={id} />
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

Reservation.propTypes = {
  type: PropTypes.oneOf(['event', 'booking']).isRequired,
  id: PropTypes.number.isRequired,
};

export default Reservation;
