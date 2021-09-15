import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const DrawerLink = ({ children, link, buttonText }) => {
  return (
    <NavLink to={link}>
      <ListItem button>
        <ListItemIcon>
          {children}
        </ListItemIcon>
        <ListItemText primary={buttonText} />
      </ListItem>
    </NavLink>
  );
};

DrawerLink.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  buttonText: PropTypes.string,
};

export default DrawerLink;
