import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import KitchenOrder from '../KitchenOrder/KitchenOrderContainer';

const KitchenOrders = ({ delivery, title, orders }) => {
  return (
    <Paper elevation={8}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{justifyContent: 'center'}}
        >
          <Box
            display='inline-flex'
            justifyContent='center'
            alignItems='center'
          >
              <Icon color='action' sx={{mr: '0.75rem'}}>
                {delivery ? <LocalShippingOutlinedIcon /> : <StoreOutlinedIcon />}
              </Icon>
            <Typography variant='h6'>
              {title}
            </Typography>
          </Box>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Stack spacing={2}>
            {orders.map((order, i) => {
              return (
                <KitchenOrder key={i} delivery={delivery} id={order.id} />
              );
            })}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

KitchenOrders.propTypes = {
  delivery: PropTypes.bool,
  title: PropTypes.string,
  orders: PropTypes.array,
};

export default KitchenOrders;