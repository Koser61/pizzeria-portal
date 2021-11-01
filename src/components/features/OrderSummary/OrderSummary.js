import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DateTime } from 'luxon';
import { statusStyle } from '../../../settings';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import DoneIcon from '@mui/icons-material/Done';

const OrderSummary = ({id, status, totalPrice, orderTime, changeOrderStatus}) => {
  const DateTimeISO = DateTime.fromISO(orderTime);
  const DateTimeLocaleString = DateTimeISO.toLocaleString(DateTime.DATETIME_MED);
  
  const statusColor = statusStyle[status].color;
  const statusIcon = statusStyle[status].icon;
  const statusLabel = statusStyle[status].label;

  const handleChangeDelivered = (event) => {
    event.preventDefault();
    changeOrderStatus('delivered');
  }

  return (
    <Link to={process.env.PUBLIC_URL + '/ordering/order/' + id}>
      <Card
        elevation={4}
        sx={{ p: '1rem', bgcolor: statusStyle[status].bgcolor }}
      >
        <Grid container justifyContent='space-between'>
          <Grid
            container item
            xs={5} sm={3} lg={4}
            justifyContent={{ xs: 'flex-start' }}
            alignItems='center'
          >
            <Grid item>
              <Chip
                sx={{
                  fontWeight: 'medium',
                  bgcolor: statusColor,
                  color: 'white',
                  px: '0.25rem',
                }}
                icon={statusIcon}
                label={statusLabel}
              />
            </Grid>
          </Grid>
          <Grid
            container item
            xs={5} sm={8} lg={6}
            rowSpacing={1}
            justifyItems='center'
            alignItems='center'
          >
            <Grid item xs={12} sm={6}>
              <Typography variant='subtitle2' textAlign='center'>
                ${totalPrice}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='subtitle2' textAlign='center'>
                {DateTimeLocaleString}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container item
            xs={2} sm={1} lg={2}
            justifyContent='center'
            alignItems='center'
          >
            {status === 'ready' ?
              <Grid item>
                <IconButton
                  onClick={(event) => handleChangeDelivered(event)}
                >
                  <DoneIcon />
                </IconButton>
              </Grid>
              :
              <Grid item></Grid>
            }
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
};

OrderSummary.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
  totalPrice: PropTypes.number,
  orderTime: PropTypes.string,
  changeOrderStatus: PropTypes.func,
};

export default OrderSummary;
