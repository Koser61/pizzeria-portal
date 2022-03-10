import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import NavBar from '../NavBar/NavBarContainer';

const MainLayout = ({children}) => {
  return (
    <>
      <NavBar />
      <Box component='section' mt={{xs: '70px', sm: '80px'}}>
        {children}
      </Box>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;