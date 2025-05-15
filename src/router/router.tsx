import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../pages/RootLayout';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import MenuPage from '../pages/Menu';

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
    ],
  },
]);

export default router;
