import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';

import NavDrawer from '../NavDrawer/NavDrawerContainer';

const NavBar = ({currentView, drawerOpen, toggleDrawer}) => {
  const handleClick = (drawerOpen, toggleDrawer) => {
    if(!drawerOpen){
      toggleDrawer(true);
      return;
    } else {
      toggleDrawer(false); 
      return;
    }
  };

  return (
    <nav>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={() => handleClick(drawerOpen, toggleDrawer)}
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>
            {currentView}
          </Typography>
        </Toolbar>
      </AppBar>
      <NavDrawer />
    </nav>
  );
};

NavBar.propTypes= {
  currentView: PropTypes.string,
  drawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default NavBar;