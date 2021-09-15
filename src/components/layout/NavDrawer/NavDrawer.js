import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeckIcon from '@material-ui/icons/Deck';
import RestaurantIcon from '@material-ui/icons/Restaurant';

import DrawerLink from '../../common/DrawerLink/DrawerLink';

const useStyles = makeStyles(() => ({
  linkList: {
    width: 250,
  },
}));

const NavDrawer = ({drawerOpen, toggleDrawer}) => {
  const classes = useStyles();
  return (
    <Drawer
      open={drawerOpen}
      onClose={() => toggleDrawer(false)}
    >
      <div
        className={classes.linkList}
        role='presentation'
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <List>
          <DrawerLink link={process.env.PUBLIC_URL + '/dashboard'} viewTitle='Dashboard' buttonText='Home'>
            <HomeIcon />
          </DrawerLink>
        </List>
        <Divider />
        <List>
          <DrawerLink link={process.env.PUBLIC_URL + '/ordering'} viewTitle='Ordering' buttonText='Ordering'>
            <ShoppingCartIcon />
          </DrawerLink>
          <DrawerLink link={process.env.PUBLIC_URL + '/tables'} viewTitle='Tables' buttonText='Tables'>
            <DeckIcon />
          </DrawerLink>
          <DrawerLink link={process.env.PUBLIC_URL + '/kitchen'} viewTitle='Kitchen' buttonText='Kitchen'>
            <RestaurantIcon />
          </DrawerLink>
        </List>
      </div>
    </Drawer>
  );
};

NavDrawer.propTypes = {
  drawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default NavDrawer;
