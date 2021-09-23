import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'

import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

import DoneIcon from '@mui/icons-material/Done';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ReceiptIcon from '@mui/icons-material/Receipt';


const Ordering = () => {
  return (
    <Container>
      <Link to={process.env.PUBLIC_URL + '/ordering/new'}>New Order</Link>
      <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'}>Order 123abc</Link>
      <article>
        <AppBar position='relative' elevation={3}>
          <Toolbar variant='dense'>
            <Typography variant='h6'>
              Table 1
            </Typography>
            <IconButton edge='end' color='inherit' aria-label='Add' size="large">
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper elevation={1}>
          <Card elevation={2}>
            <Box
              width='100%'
              display='inline-flex'
              flexWrap='nowrap'
              alignItems='center'
              justifyContent='space-between'
            >
              <Box>
                <Avatar>
                  <FastfoodIcon />
                </Avatar>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-around'
                width='100%'
              >
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Status:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>ready</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Order Time:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>2021-07-17 15:30:00</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Total:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>$120</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box minWidth='48px' minHeight='48px'>
                <IconButton aria-label='deliver' size="large">
                  <CheckIcon />
                </IconButton>
              </Box>
            </Box>
          </Card>
          <Card elevation={2}>
            <Box
              width='100%'
              display='inline-flex'
              flexWrap='nowrap'
              alignItems='center'
              justifyContent='space-between'
            >
              <Box>
                <Avatar>
                  <ReceiptIcon />
                </Avatar>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-around'
                width='100%'
              >
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Status:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>ordered</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Order Time:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>2021-07-17 15:30:00</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Total:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>$120</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box minWidth='48px' minHeight='48px'></Box>
            </Box>
          </Card>
        </Paper>
      </article>
      <article>
        <AppBar position='relative' elevation={3}>
          <Toolbar variant='dense'>
            <Typography variant='h6'>
              Table 2
            </Typography>
            <IconButton edge='end' color='inherit' aria-label='Add' size="large">
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper elevation={1}>
          <Card elevation={2}>
            <Box
              width='100%'
              display='inline-flex'
              flexWrap='nowrap'
              alignItems='center'
              justifyContent='space-between'
            >
              <Box>
                <Avatar>
                  <PriorityHighIcon />
                </Avatar>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-around'
                width='100%'
              >
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Status:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>new</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Order Time:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>2021-07-17 15:30:00</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Total:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>$120</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box minWidth='48px' minHeight='48px'></Box>
            </Box>
          </Card>
          <Card elevation={2}>
            <Box
              width='100%'
              display='inline-flex'
              flexWrap='nowrap'
              alignItems='center'
              justifyContent='space-between'
            >
              <Box>
                <Avatar>
                  <DoneIcon />
                </Avatar>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-around'
                width='100%'
              >
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Status:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>delivered</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Order Time:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>2021-07-17 15:30:00</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display='flex' 
                  justifyContent='center' 
                  flexDirection='row'
                >
                  <Box>
                    <Typography variant='body1'>
                      <strong>Total:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1'>
                      <span>$120</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box minWidth='48px' minHeight='48px'></Box>
            </Box>
          </Card>
        </Paper>
      </article>
    </Container>
  );
};

export default Ordering;