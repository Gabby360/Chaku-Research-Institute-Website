import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import OurWork from '../pages/OurWork';
import Impact from '../pages/Impact';
import Media from '../pages/Media';
import GetInvolved from '../pages/GetInvolved';
import Donate from '../pages/Donate';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'our-work', element: <OurWork /> },
      { path: 'impact', element: <Impact /> },
      { path: 'media', element: <Media /> },
      { path: 'get-involved', element: <GetInvolved /> },
      { path: 'donate', element: <Donate /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
