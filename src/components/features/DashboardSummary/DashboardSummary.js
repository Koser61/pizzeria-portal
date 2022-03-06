import React from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';

import DashboardTile from '../../common/DashboardTile/DashboardTile';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import EventIcon from '@mui/icons-material/Event';

const DashboardSummary = ({
  doneDeliveryOrders,
  totalDeliveryOrders,
  doneLocalOrders,
  totalLocalOrders,
  bookings,
  events
}) => (
  <Stack spacing={2} my={2}>
    <DashboardTile
      showCaption
      title='Delivery orders'
      icon={<LocalShippingIcon fontSize='large' />}
      bgColor='black'
      firstValue={doneDeliveryOrders}
      firstValueCaption='done'
      secondValue={totalDeliveryOrders}
      secondValueCaption='total'
    />
    <DashboardTile
      showCaption
      title='Local orders'
      icon={<MenuBookIcon fontSize='large' />}
      bgColor='black'
      firstValue={doneLocalOrders}
      firstValueCaption='done'
      secondValue={totalLocalOrders}
      secondValueCaption='total'
    />
    <DashboardTile
      title='Bookings'
      icon={<TableRestaurantIcon fontSize='large' />}
      bgColor='black'
      firstValue={bookings}
    />
    <DashboardTile
      title='Events'
      icon={<EventIcon fontSize='large' />}
      bgColor='black'
      firstValue={events}
    />
  </Stack>
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