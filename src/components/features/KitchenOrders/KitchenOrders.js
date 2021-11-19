import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import KitchenOrdersSummary from '../../common/KitchenOrdersSummary/KitchenOrdersSummary';
import KitchenOrder from '../KitchenOrder/KitchenOrderContainer';

class KitchenOrders extends React.Component {
  static propTypes = {
    delivery: PropTypes.bool,
    title: PropTypes.string,

    fetchOrders: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount() {
    const { fetchOrders } = this.props;

    fetchOrders();
  }

  render() {
    const { loading: { active, error }, delivery, title, orders } = this.props;

    if(active || !orders.length){
      return (
        <Paper elevation={8}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{justifyContent: 'center'}}
            >
              <KitchenOrdersSummary delivery={delivery} title={title} />
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Skeleton animation='wave' />
              <Skeleton animation='wave' />
              <Skeleton animation='wave' />
            </AccordionDetails>
          </Accordion>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper elevation={8}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{justifyContent: 'center'}}
            >
              <KitchenOrdersSummary delivery={delivery} title={title} />
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Skeleton animation='pulse' />
              <Skeleton animation='pulse' />
              <Skeleton animation='pulse' />
            </AccordionDetails>
          </Accordion>
        </Paper>
      );
    } else {
      return (
        <Paper elevation={8}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{justifyContent: 'center'}}
            >
              <KitchenOrdersSummary delivery={delivery} title={title} />
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Stack spacing={1} mt='0.5rem'>
                {orders.map((order, i) => {
                  return (
                    <KitchenOrder key={i} index={i} delivery={delivery} id={order.id} />
                  );
                })}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Paper>
      );
    }
  }
}

export default KitchenOrders;