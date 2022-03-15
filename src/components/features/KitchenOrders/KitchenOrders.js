import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import KitchenOrdersSummary from '../../common/KitchenOrdersSummary/KitchenOrdersSummary';
import KitchenOrder from '../KitchenOrder/KitchenOrderContainer';

const KitchenOrders = ({ delivery, title, orders }) => {
  return (
    <Paper elevation={8}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ justifyContent: 'center' }}
        >
          <KitchenOrdersSummary delivery={delivery} title={title} />
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Stack spacing={1} mt='0.5rem'>
            {orders.map((order, i) => {
              const orderIndex = orders.indexOf(order);

              return (
                <KitchenOrder
                  key={i}
                  delivery={delivery}
                  id={order.id}
                  index={orderIndex}
                />
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