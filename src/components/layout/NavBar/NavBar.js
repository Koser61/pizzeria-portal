import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import NavDrawer from '../NavDrawer/NavDrawerContainer';

const useStyles = makeStyles((theme) => ({
  appNav: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const NavBar = ({currentView, drawerOpen, toggleDrawer}) => {
  const classes = useStyles();
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
    <nav className={classes.appNav}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={() => handleClick(drawerOpen, toggleDrawer)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {currentView}
          </Typography>
        </Toolbar>
      </AppBar>
      <NavDrawer anchor='left' />
    </nav>
  );
};

NavBar.propTypes= {
  currentView: PropTypes.string,
  drawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default NavBar;