import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../pages/RootLayout';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';

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
    ],
  },
]);

export default router;
