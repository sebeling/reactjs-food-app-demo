import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router/router';
import useGetMenuItems from './hooks/useGetMenuItems';
import { useAppDispatch } from './app/hooks';
import { menuActions } from './store/slices/menuSlice';

function App() {
  const dispatch = useAppDispatch();
  const { getMenuItems } = useGetMenuItems();

  useEffect(() => {
    const fetchMenuItems = async () => {
      const menuItems = await getMenuItems();
      dispatch(menuActions.addItems(menuItems.items));
    };

    fetchMenuItems();
  });

  return <RouterProvider router={router} />;
}

export default App;
