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
import FactCheckIcon from '@mui/icons-material/FactCheck';

import OrderProduct from '../../common/OrderProduct/OrderProduct';

const KitchenOrder = ({ delivery, orderTime, address, phone, table, products }) => {
  const InlineBox = ({children}) => {
    return (
      <Box height={1/1} display='inline-flex' alignItems='center'>
        {children}
      </Box>
    );
  };
  const CenteringBox = ({children}) => {
    return (
      <Box height={1/1} display='flex' justifyContent='center' alignItems='center'>
        {children}
      </Box>
    );
  };

  return (
    <Card elevation={4} sx={{p: '0.5rem'}}>
      <Grid container>
        <Grid container item xs={12}>
          <Grid item xs={10}>
            <CenteringBox>
              <InlineBox>
                <Icon sx={{display: 'flex', alignItems: 'center', mx: '0.3rem'}}>
                  <ScheduleIcon />
                </Icon>
                <Typography variant='body2'>
                  {DateTime.fromISO(orderTime).toLocaleString(DateTime.DATETIME_MED)}
                </Typography>
              </InlineBox>
            </CenteringBox>
          </Grid>
          <Grid item xs={2}>
            <CenteringBox>
              <IconButton color='success'>
                <FactCheckIcon />
              </IconButton>
            </CenteringBox>
          </Grid>
        </Grid>
        <Grid container item xs={12} my='0.4rem'>
          {delivery ?
            <React.Fragment>
              <Grid item xs={6}>
                <CenteringBox>
                  <InlineBox>
                    <Icon sx={{display: 'flex', alignItems: 'center', mx: '0.3rem'}}>
                      <HomeWorkIcon />
                    </Icon>
                    <Typography variant='body2'>
                      {address}
                    </Typography>
                  </InlineBox>
                </CenteringBox>
              </Grid>
              <Grid item xs={6}>
                <CenteringBox>
                  <InlineBox>
                    <Icon sx={{display: 'flex', alignItems: 'center', mx: '0.3rem'}}>
                      <ContactPhoneIcon />
                    </Icon>
                    <Typography variant='body2'>
                      {phone}
                    </Typography>
                  </InlineBox>
                </CenteringBox>
              </Grid>
            </React.Fragment>
            :
            <Grid item xs={12}>
              <CenteringBox>
                <InlineBox>
                  <Icon sx={{display: 'flex', alignItems: 'center', mx: '0.3rem'}}>
                    <RoomIcon />
                  </Icon>
                  <Typography variant='body2'>
                    {table}
                  </Typography>
                </InlineBox>
              </CenteringBox>
            </Grid>}
        </Grid>
      </Grid>
      <Stack>
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