import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const DrawerLink = ({ children, link, title }) => {
  return (
    <NavLink to={link}>
      <ListItem button>
        <ListItemIcon>
          {children}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </NavLink>
  );
};

DrawerLink.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string,
};

export default DrawerLink;
