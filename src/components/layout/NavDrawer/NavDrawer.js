import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeckIcon from '@mui/icons-material/Deck';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import DrawerLink from '../../common/DrawerLink/DrawerLink';

const NavDrawer = ({drawerOpen, toggleDrawer}) => {
  return (
    <Drawer
      open={drawerOpen}
      onClose={() => toggleDrawer(false)}
    >
      <Box
        role='presentation'
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
        sx={{ width: 200 }}
      >
        <List>
          <DrawerLink link={process.env.PUBLIC_URL + '/dashboard'} title='Home'>
            <HomeIcon />
          </DrawerLink>
        </List>
        <Divider />
        <List>
          <DrawerLink link={process.env.PUBLIC_URL + '/ordering'} title='Ordering'>
            <ShoppingCartIcon />
          </DrawerLink>
          <DrawerLink link={process.env.PUBLIC_URL + '/tables'} title='Tables'>
            <DeckIcon />
          </DrawerLink>
          <DrawerLink link={process.env.PUBLIC_URL + '/kitchen'} title='Kitchen'>
            <RestaurantIcon />
          </DrawerLink>
        </List>
      </Box>
    </Drawer>
  );
};

NavDrawer.propTypes = {
  anchor: PropTypes.string,
  drawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default NavDrawer;
