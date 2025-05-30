import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../pages/RootLayout';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import HoursAndLocation from '../pages/HoursAndLocation';
import Reservations from '../pages/Reservations';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
      },
      {
        path: '/menu/:slug',
        element: <MenuItemPage />,
      },
      {
        path: '/hours-and-location',
        element: <HoursAndLocation />,
      },
      {
        path: '/reservations',
        element: <Reservations />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
