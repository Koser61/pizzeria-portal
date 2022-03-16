import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';

import { tables } from '../../../settings';

import TableOrders from '../../features/TableOrders/TableOrdersContainer';

class Ordering extends React.Component {
  static propTypes = {
    fetchOrders: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    changeView: PropTypes.func,
  };

  componentDidMount() {
    const { changeView, fetchOrders } = this.props;
    
    changeView('Ordering');
    fetchOrders();
  }

  render() {
    const { loading: { active, error } } = this.props;

    if(active) {
      return (
        <Container>
          <Backdrop open={active}>
            <CircularProgress sx={{color: 'white'}} />
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
          <Grid container my={1} spacing={2}>
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

export default Ordering;