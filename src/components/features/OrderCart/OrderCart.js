import React from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const OrderCart = () => {
  return (
    <Card raised sx={{marginTop: '0.5rem'}}>
      <Stack m='0.5rem' spacing='0.5rem'>
        <Card variant='outlined' sx={{p: '0.5rem'}}>
          <Box
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Box mx='1rem'>
              <Typography variant='body1' noWrap>
                1 x
              </Typography>
            </Box>
            <Box mx='1rem'>
              <Typography fontWeight='bold'>Nonna Alba's Pizza</Typography>
              <div>
                <Typography
                  fontStyle='italic'
                  variant='subtitle2'
                  component='span'
                >Sauce:&nbsp;
                </Typography>
                <Typography
                  fontStyle='italic'
                  variant='body2'
                  component='span'
                >Tomato
                </Typography>
              </div>
              <div>
                <Typography
                  fontStyle='italic'
                  variant='subtitle2'
                  component='span'
                >
                  Toppings:&nbsp;
                </Typography>
                <Typography
                  fontStyle='italic'
                  variant='body2'
                  component='span'
                >
                  Olives, Red peppers, Green peppers, Mushrooms, Fresh basil
                </Typography>
              </div>
              <div>
                <Typography
                  fontStyle='italic'
                  variant='subtitle2'
                  component='span'
                >
                  pizza crust:&nbsp;
                </Typography>
                <Typography
                  fontStyle='italic'
                  variant='body2'
                  component='span'
                >
                  standard
                </Typography>
              </div>
            </Box>
            <Box mx='1rem'>
              <Typography variant='body1' noWrap>
                $20
              </Typography>
            </Box>
            <IconButton sx={{mx: '0.5rem'}}>
              <DeleteOutlinedIcon />
            </IconButton>
          </Box>
        </Card>
      </Stack>
      <Divider />
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        padding='1rem'
      >
        <Typography variant='h6'>
          Total: $20
        </Typography>
        <Button
          variant="contained"
          endIcon={<ShoppingCartIcon />}
        >
          Order
        </Button>
      </Box>
    </Card>
  );
};

export default OrderCart;