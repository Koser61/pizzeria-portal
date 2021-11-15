import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';

import ScheduleIcon from '@mui/icons-material/Schedule';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import RoomIcon from '@mui/icons-material/Room';
import CheckIcon from '@mui/icons-material/Check';

import OrderProduct from '../../common/OrderProduct/OrderProduct';

import { tables } from '../../../settings';

const KitchenOrder = ({
  delivery,
  orderTime,
  address,
  phone,
  table,
  products,
  orderData,
  changeOrderStatusInAPI,
}) => {

  const InlineBox = ({ children }) => {
    return (
      <Box height={1 / 1} display='inline-flex' alignItems='center' my='0.5rem'>
        {children}
      </Box>
    );
  };
  const CenteringBox = ({ children }) => {
    return (
      <Box
        height={1 / 1}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        {children}
      </Box>
    );
  };
  const IconWrapper = ({ children }) => {
    return (
      <Icon sx={{ display: 'flex', alignItems: 'center', mr: '0.25rem' }}>
        {children}
      </Icon>
    );
  };
  const getTableLabel = (tableValue) => {
    for (let table of tables) {
      if (table.value === tableValue) {
        return table.label;
      }
    }
  };
  const handleChangeStatus = (event) => {
    event.preventDefault();

    if(delivery) {
      changeOrderStatusInAPI('inDelivery', orderData);
    } else {
      changeOrderStatusInAPI('ready', orderData);
    }
  };

  return (
    <Card elevation={4} sx={{ p: '0.5rem' }}>
      <Grid container>
        <Grid item xs={10}>
          <CenteringBox>
            <InlineBox>
              <IconWrapper>
                <ScheduleIcon />
              </IconWrapper>
              <Typography variant='body2'>
                {DateTime.fromISO(orderTime).toLocaleString(
                  DateTime.DATETIME_MED
                )}
              </Typography>
            </InlineBox>
          </CenteringBox>
        </Grid>
        <Grid item xs={2}>
          <CenteringBox>
            <IconButton
              color='success'
              onClick={(event) => handleChangeStatus(event)}
            >
              <CheckIcon />
            </IconButton>
          </CenteringBox>
        </Grid>
      </Grid>
      <Grid container>
        {delivery ? (
          <React.Fragment>
            <Grid item xs={6}>
              <CenteringBox>
                <InlineBox>
                  <IconWrapper>
                    <HomeWorkIcon />
                  </IconWrapper>
                  <Typography variant='body2'>{address}</Typography>
                </InlineBox>
              </CenteringBox>
            </Grid>
            <Grid item xs={6}>
              <CenteringBox>
                <InlineBox>
                  <IconWrapper>
                    <ContactPhoneIcon />
                  </IconWrapper>
                  <Typography variant='body2'>{phone}</Typography>
                </InlineBox>
              </CenteringBox>
            </Grid>
          </React.Fragment>
        ) : (
          <Grid item xs={12}>
            <CenteringBox>
              <InlineBox>
                <IconWrapper>
                  <RoomIcon />
                </IconWrapper>
                <Typography variant='body2'>{getTableLabel(table)}</Typography>
              </InlineBox>
            </CenteringBox>
          </Grid>
        )}
      </Grid>
      <Stack spacing='0.5rem'>
        {products.map((product, i) => {
          return (
            <OrderProduct
              key={i}
              amount={product.amount}
              name={product.name}
              params={product.params}
            />
          );
        })}
      </Stack>
    </Card>
  );
};

KitchenOrder.propTypes = {
  delivery: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  orderTime: PropTypes.string,
  products: PropTypes.array,
  address: PropTypes.string,
  phone: PropTypes.string,
  table: PropTypes.string,
};

export default KitchenOrder;
