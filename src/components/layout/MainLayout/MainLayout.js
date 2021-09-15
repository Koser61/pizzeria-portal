import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBarContainer';

const MainLayout = ({children}) => (
  <main>
    <NavBar />
    {children}
  </main>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;