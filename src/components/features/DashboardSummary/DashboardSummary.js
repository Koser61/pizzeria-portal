import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import DashboardTile from '../../common/DashboardTile/DashboardTile';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import EventIcon from '@mui/icons-material/Event';

import { cyan, brown, green, deepOrange } from '@mui/material/colors';

const DashboardSummary = ({
  doneDeliveryOrders,
  totalDeliveryOrders,
  doneLocalOrders,
  totalLocalOrders,
  bookings,
  events
}) => (
  <Box maxWidth={900} my={{xs: 2, sm: 3, md: 6}} mx='auto'>
    <Grid container spacing={1}>
      <Grid container item xs={12} sm={8} rowSpacing={1}>
        <Grid item xs={12}>
          <DashboardTile
            showCaption
            title='Delivery orders'
            icon={<LocalShippingIcon fontSize='large' />}
            bgColor={cyan[900]}
            firstValue={doneDeliveryOrders}
            firstValueCaption='done'
            secondValue={totalDeliveryOrders}
            secondValueCaption='total'
          />
        </Grid>
        <Grid item xs={12}>
          <DashboardTile
            showCaption
            title='Local orders'
            icon={<MenuBookIcon fontSize='large' />}
            bgColor={brown[800]}
            firstValue={doneLocalOrders}
            firstValueCaption='done'
            secondValue={totalLocalOrders}
            secondValueCaption='total'
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={4} spacing={1}>
        <Grid item xs={6} sm={12}>
          <DashboardTile
            title='Bookings'
            icon={<TableRestaurantIcon fontSize='large' />}
            bgColor={green[900]}
            firstValue={bookings}
          />
        </Grid>
        <Grid item xs={6} sm={12}>
          <DashboardTile
            title='Events'
            icon={<EventIcon fontSize='large' />}
            bgColor={deepOrange[900]}
            firstValue={events}
          />
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

DashboardSummary.propTypes = {
  doneDeliveryOrders: PropTypes.number.isRequired,
  totalDeliveryOrders: PropTypes.number.isRequired,
  doneLocalOrders: PropTypes.number.isRequired,
  totalLocalOrders: PropTypes.number.isRequired,
  bookings: PropTypes.number.isRequired,
  events: PropTypes.number.isRequired
};

export default DashboardSummary;