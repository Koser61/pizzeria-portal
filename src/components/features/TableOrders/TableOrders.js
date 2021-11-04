import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

import OrderSummary from '../OrderSummary/OrderSummaryContainer';

const TableOrders = ({ value, label, orders, allOrders }) => {
  return (
    <Grid item xs={12} lg={4}>
      <Paper elevation={8}>
        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ mx: '0.5rem' }} />}
          >
            <Grid container>
              <Grid
                item container
                xs={2} sm={1} lg={2}
                justifyContent='center'
                alignItems='center'
              >
                <Grid item>
                  <Link to={process.env.PUBLIC_URL + '/ordering/new/' + value}>
                    <IconButton>
                      <AddIcon />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
              <Grid
                item container
                xs={10} sm={11} lg={10}
                justifyContent='center'
                alignItems='center'
              >
                <Grid item>
                  <Typography
                    variant='h4'
                    fontSize={{ xs: '1.25rem' }}
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {label}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 1 }}>
            <Stack spacing={1}>
              {orders.map((order, i) => {
                const orderIndex = allOrders.indexOf(order);

                return (
                  <OrderSummary key={i} index={orderIndex} id={order.id} />
                );
              })}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Grid>
  );
};

TableOrders.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  orders: PropTypes.array,
};

export default TableOrders;
