import React from 'react';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // delivery order
//import MenuBookIcon from '@mui/icons-material/MenuBook'; // local order

import TableRestaurantIcon from '@mui/icons-material/TableRestaurant'; // booking
//import EventIcon from '@mui/icons-material/Event'; // event

const Dashboard = () => (
  <Container>
    {/* DONE / TOTAL */}
    <Card sx={{ my: 2, py: 2, px: 4, bgcolor: 'black', color: 'white' }}>
      <Typography
        fontSize={18}
        sx={{ textTransform: 'uppercase' }}
        mb={0.75}
      >
        Delivery orders
      </Typography>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography fontSize={36} fontWeight='bold'>
          67 / 70
        </Typography>
        <LocalShippingIcon fontSize='large' />
      </Box>
      <Typography variant='caption' fontSize={14}>
        done / total
      </Typography>
    </Card>
    {/* SINGLE */}
    <Card sx={{ my: 2, py: 2, px: 4, bgcolor: 'black', color: 'white' }}>
      <Typography
        fontSize={18}
        sx={{ textTransform: 'uppercase' }}
        mb={0.75}
      >
        Bookings
      </Typography>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography fontSize={36} fontWeight='bold'>
          16
        </Typography>
        <TableRestaurantIcon fontSize='large' />
      </Box>
    </Card>
  </Container>
);

/*
  - Delivery orders (done/total),
  - Local orders (done/total),
  - Bookings,
  - Events,
*/

export default Dashboard;