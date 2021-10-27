import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

class AmountWidget extends React.Component {
  static propTypes = {
    amount: PropTypes.number,
    changeAmount: PropTypes.func,
  }

  componentDidMount() {
    const { changeAmount } = this.props;
    changeAmount(1);
  }

  handleIncrement(currentAmount) {
    const { changeAmount } = this.props;
    
    if (currentAmount < 9) {
      changeAmount(++currentAmount);
    } else {
      return;
    }
  }

  handleDecrement(currentAmount) {
    const { changeAmount } = this.props;

    if (currentAmount > 1) {
      changeAmount(--currentAmount);
    } else {
      return;
    }
  }

  render() {
    const { amount } = this.props;

    return (
      <Grid item container xs={3}>
        <Grid item xs={12} sm={4} sx={{order: {xs: 1, sm: 3}}}>
          <Box display='flex' justifyContent='center'>
            <IconButton onClick={() => this.handleIncrement(amount)}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} order={2}>
          <Box 
            height={1/1}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Card
              variant='outlined'
              sx={{
                height: '2rem',
                width: '2rem',
                display: 'flex', 
                justifyContent: 'center',
                alignContent: 'center',
                lineHeight: '2rem',
                margin: '0.1rem',
                minWidth: '2rem'
              }}
            >
              {amount}
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{order: {xs: 3, sm: 1}}}>
          <Box display='flex' justifyContent='center'>
            <IconButton onClick={() => this.handleDecrement(amount)}>
              <RemoveIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default AmountWidget;