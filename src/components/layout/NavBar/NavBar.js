import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';

import NavDrawer from '../NavDrawer/NavDrawerContainer';

const NavBar = ({ currentView, drawerOpen, toggleDrawer }) => {
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
      <AppBar position='fixed' sx={{ top: 0, bgcolor: 'primary.dark' }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={() => handleClick(drawerOpen, toggleDrawer)}
            size='large'>
            <MenuIcon />
          </IconButton>
          <Box width={1/1} display='flex' justifyContent='center'>
            <Typography variant='h6'>
              {currentView}
            </Typography>
          </Box>
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