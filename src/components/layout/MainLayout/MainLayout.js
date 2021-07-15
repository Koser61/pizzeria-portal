import React from 'react';

import PageNav from '../PageNav/PageNav'

const MainLayout = (props) => (
  <main>
    <PageNav />
    {props.children}
  </main>
);

export default MainLayout;