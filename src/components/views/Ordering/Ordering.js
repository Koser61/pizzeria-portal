import React from 'react';
//import {Link, Switch, Route} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar'

import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';

import DoneIcon from '@material-ui/icons/Done';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import {lightGreen, teal, yellow, orange, grey} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  tableArticle: {
    margin: 12,
  },
  title: {
    flexGrow: 1,
  },
  tableOrders: {
    padding: 12,
  },
  orderSummary: {
    padding: 12,
    margin: '6px 0',
  },
  singleSummaryInfo: {
    marginLeft: 6,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  statusIcon: {
    backgroundColor: 'white',
    color: grey[600],
  },
  New: {
    backgroundColor: orange[200],
  },
  Ordered: {
    backgroundColor: yellow[200],
  },
  Ready: {
    backgroundColor: teal[200],
  },
  Delivered: {
    backgroundColor: lightGreen[200],
  },
}));


const Ordering = () => {
  const classes = useStyles();

  return (
    <Container>
      <article className={classes.tableArticle}>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography variant="h6" className={classes.title}>
              Table 1
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="Add">
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper className={classes.tableOrders}>
          <Card className={[classes.orderSummary, classes.Ready]}>
            <Box
              width="100%"
              display="inline-flex"
              flexWrap="nowrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Avatar className={classes.statusIcon}>
                  <DoneIcon />
                </Avatar>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                width="100%"
              >
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Status:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>ready</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Order Time:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>2021-07-17 15:30:00</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Total:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>$120</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box minWidth="48px" minHeight="48px">
                <IconButton aria-label="deliver">
                  <CheckIcon />
                </IconButton>
              </Box>
            </Box>
          </Card>
          <Card className={[classes.orderSummary, classes.Ordered]}>
            <Box
              width="100%"
              display="inline-flex"
              flexWrap="nowrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Avatar className={classes.statusIcon}>
                  <FastfoodIcon />
                </Avatar>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                width="100%"
              >
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Status:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>ordered</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Order Time:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>2021-07-17 15:30:00</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Total:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>$120</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box minWidth="48px" minHeight="48px"></Box>
            </Box>
          </Card>
        </Paper>
      </article>
      <article className={classes.tableArticle}>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography variant="h6" className={classes.title}>
              Table 2
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="Add">
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper className={classes.tableOrders}>
          <Card className={[classes.orderSummary, classes.New]}>
            <Box
              width="100%"
              display="inline-flex"
              flexWrap="nowrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Avatar className={classes.statusIcon}>
                  <PriorityHighIcon />
                </Avatar>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                width="100%"
              >
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Status:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>new</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Order Time:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>2021-07-17 15:30:00</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Total:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>$120</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box minWidth="48px" minHeight="48px"></Box>
            </Box>
          </Card>
          <Card className={[classes.orderSummary, classes.Delivered]}>
            <Box
              width="100%"
              display="inline-flex"
              flexWrap="nowrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Avatar className={classes.statusIcon}>
                  <DoneAllIcon />
                </Avatar>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                width="100%"
              >
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Status:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>delivered</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Order Time:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>2021-07-17 15:30:00</span>
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  flexDirection="row"
                  className={classes.singleSummaryInfo}
                >
                  <Box>
                    <Typography variant="body1">
                      <strong>Total:&nbsp;</strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      <span>$120</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box minWidth="48px" minHeight="48px"></Box>
            </Box>
          </Card>
        </Paper>
      </article>
      {/*
        <Link to={process.env.PUBLIC_URL + '/ordering/new'} activeClassName='active'>New Order</Link>
        <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'} activeClassName='active'>Order 123abc</Link>
        <div>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/ordering/new'} component={Order} />
            <Route path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order} />
          </Switch>
        </div>*/}
    </Container>
  );
};

export default Ordering;