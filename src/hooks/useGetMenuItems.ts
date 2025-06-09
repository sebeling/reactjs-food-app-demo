import { type MenuContext } from '../interfaces/MenuContext';

const useGetMenuItems = () => {
  const getMenuItems = async () => {
    const fetchMenuItems = async (): Promise<MenuContext> => {
      const response = await fetch('http://localhost:8080/menu-items');

      if (!response.ok) {
        throw new Error('Failed to fetch menu data!');
      }

      const items = await response.json();
      return { items };
    };

    const items = await fetchMenuItems();
    return items;
  };

  return {
    getMenuItems,
  };
};

export default useGetMenuItems;
