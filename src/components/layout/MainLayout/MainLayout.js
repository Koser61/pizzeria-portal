import React from 'react';

import NavBar from '../NavBar/NavBar'

const MainLayout = (props) => (
  <main>
    <NavBar />
    {props.children}
  </main>
);

export default MainLayout;