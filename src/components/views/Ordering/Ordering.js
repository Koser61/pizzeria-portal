import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
//import Paper from '@mui/material/Paper';
//import Accordion from '@mui/material/Accordion';
//import AccordionSummary from '@mui/material/AccordionSummary';
//import AccordionDetails from '@mui/material/AccordionDetails';
//import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
//import Stack from '@mui/material/Stack';
//import Card from '@mui/material/Card';
//import Chip from '@mui/material/Chip';

//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import AddIcon from '@mui/icons-material/Add';

import { tables } from '../../../settings';

import TableOrders from '../../features/TableOrders/TableOrdersContainer';

//import CheckCircleIcon from '@mui/icons-material/CheckCircle';

//import NewReleasesIcon from '@mui/icons-material/NewReleases'; // NEW
//import ReceiptIcon from '@mui/icons-material/Receipt'; // ORDERED
//import FastfoodIcon from '@mui/icons-material/Fastfood'; // READY
//import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // IN DELIVERY
//import DoneIcon from '@mui/icons-material/Done'; // DELIVERED

//import { red, orange, yellow, green, lightGreen } from '@mui/material/colors';

class Ordering extends React.Component {
  static propTypes = {
    fetchOrders: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  };

  componentDidMount() {
    const { fetchOrders } = this.props;
    fetchOrders();
  }

  render() {
    const { loading: { active, error }, orders } = this.props;

    if(active || !orders.length) {
      return (
        <Container>
          <Backdrop open={active || !orders.length}>
            <CircularProgress />
          </Backdrop>
        </Container>
      );
    } else if(error) {
      return (
        <Container>
          <Box width={1/1} py='1rem'>
            <Alert severity='error' mt='2rem'>
              <AlertTitle>Error!</AlertTitle>
              {error}
            </Alert>
          </Box>
        </Container>
      );
    } else {
      return (
        <Container>
          <Grid container mt={0.5} spacing={2}>
            {tables.map((table) => {
              return (
                <TableOrders
                  key={table.value}
                  value={table.value}
                  label={table.label}
                />
              );
            })}
          </Grid>
        </Container>
      );
    }
  }
}

/*
const Ordering = () => {
  const statusStyle = {
    new: {
      color: red[900],
      icon: <NewReleasesIcon sx={{fill: 'white'}} />
    },
    ordered: {
      color: orange[900],
      icon: <ReceiptIcon sx={{fill: 'white'}} />
    },
    ready: {
      color: yellow[900],
      icon: <FastfoodIcon sx={{fill: 'white'}} />
    },
    inDelivery: {
      color: lightGreen[900],
      icon: <LocalShippingIcon sx={{fill: 'white'}} />
    },
    delivered: {
      color: green[900],
      icon: <DoneIcon sx={{fill: 'white'}} />
    },
  };

  return (
    <Container>
      <Grid container mt={0.5} spacing={2}>
        <Grid item xs={12} lg={4}>
          <Paper elevation={6}>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{mx: '0.5rem'}} />}
              >
                <Grid container>
                  <Grid 
                    item container
                    xs={2} sm={1} lg={2}
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Grid item>
                      <Link to={process.env.PUBLIC_URL + '/ordering/new'}>
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
                        fontSize={{xs: '1.25rem'}}
                        sx={{textTransform: 'uppercase'}}
                      >
                        Table 1
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails sx={{p: 1}}>
                <Stack spacing={1}>
                  <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'}>
                    <Card
                      elevation={3}
                      sx={{p: '1rem'}}
                    >
                      <Grid container justifyContent='space-between'>
                        <Grid
                          container item
                          xs={5} sm={3} lg={4}
                          justifyContent={{xs: 'flex-start'}}
                          alignItems='center'
                        >
                          <Grid item>
                            <Chip
                              sx={{
                                fontWeight: 'medium',
                                bgcolor: statusStyle.inDelivery.color,
                                color: 'white'
                              }}
                              icon={statusStyle.inDelivery.icon}
                              label='In delivery'
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
                              $120
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant='subtitle2' textAlign='center'>
                              20-JUN-1990 08:03:00
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container item
                          xs={2} sm={1} lg={2}
                          justifyContent='center'
                          alignItems='center'
                        >
                          <Grid item>
                            <IconButton>
                              <CheckCircleIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </Link>
                  <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'}>
                    <Card
                      elevation={3}
                      sx={{p: '1rem'}}
                    >
                      <Grid container justifyContent='space-between'>
                        <Grid
                          container item
                          xs={5} sm={3} lg={4}
                          justifyContent={{xs: 'flex-start'}}
                          alignItems='center'
                        >
                          <Grid item>
                            <Chip
                              sx={{
                                fontWeight: 'medium',
                                bgcolor: statusStyle.inDelivery.color,
                                color: 'white'
                              }}
                              icon={statusStyle.inDelivery.icon}
                              label='In delivery'
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
                              $120
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant='subtitle2' textAlign='center'>
                              20-JUN-1990 08:03:00
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container item
                          xs={2} sm={1} lg={2}
                          justifyContent='center'
                          alignItems='center'
                        >
                          <Grid item>
                            <IconButton>
                              <CheckCircleIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </Link>
                  <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'}>
                    <Card
                      elevation={3}
                      sx={{p: '1rem'}}
                    >
                      <Grid container justifyContent='space-between'>
                        <Grid
                          container item
                          xs={5} sm={3} lg={4}
                          justifyContent={{xs: 'flex-start'}}
                          alignItems='center'
                        >
                          <Grid item>
                            <Chip
                              sx={{
                                fontWeight: 'medium',
                                bgcolor: statusStyle.inDelivery.color,
                                color: 'white'
                              }}
                              icon={statusStyle.inDelivery.icon}
                              label='In delivery'
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
                              $120
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant='subtitle2' textAlign='center'>
                              20-JUN-1990 08:03:00
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container item
                          xs={2} sm={1} lg={2}
                          justifyContent='center'
                          alignItems='center'
                        >
                          <Grid item>
                            <IconButton>
                              <CheckCircleIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </Link>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>
      
      
    </Container>
  );
};
*/
export default Ordering;