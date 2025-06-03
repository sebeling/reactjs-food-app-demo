import { useParams } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import MenuItemDetails from '../components/MenuItemDetails/MenuItemDetails';

const MenuItemPage = () => {
  const { slug } = useParams();
  const item = useAppSelector((state) =>
    state.menu.items.find((item) => item.slug === slug)
  );

  if (!item) {
    throw new Error('Page not found');
  }

  return (
    <div>
      <MenuItemDetails item={item} />
    </div>
  );
};

export default MenuItemPage;
