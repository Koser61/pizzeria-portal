import React from 'react';
//import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';

import DashboardTile from '../../common/DashboardTile/DashboardTile';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import EventIcon from '@mui/icons-material/Event';

const DashboardSummary = () => (
  <Stack spacing={2} my={2}>
    <DashboardTile
      showCaption
      title='Delivery orders'
      icon={<LocalShippingIcon fontSize='large' />}
      bgColor='black'
      firstValue={24}
      firstValueCaption='done'
      secondValue={28}
      secondValueCaption='total'
    />
    <DashboardTile
      showCaption
      title='Local orders'
      icon={<MenuBookIcon fontSize='large' />}
      bgColor='black'
      firstValue={18}
      firstValueCaption='done'
      secondValue={20}
      secondValueCaption='total'
    />
    <DashboardTile
      title='Bookings'
      icon={<TableRestaurantIcon fontSize='large' />}
      bgColor='black'
      firstValue={1}
    />
    <DashboardTile
      title='Events'
      icon={<EventIcon fontSize='large' />}
      bgColor='black'
      firstValue={8}
    />
  </Stack>
);

DashboardSummary.propTypes = {

};

export default DashboardSummary;