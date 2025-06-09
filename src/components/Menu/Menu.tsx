import { useAppSelector } from '../../app/hooks';

import MenuSection from '../MenuSection/MenuSection';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  const { items } = useAppSelector((state) => state.menu);
  const appetizers = items.filter((item) => item.type.includes('appetizer'));
  const entrees = items.filter((item) => item.type.includes('entree'));
  const desserts = items.filter((item) => item.type.includes('dessert'));

  return (
    <div className={styles.menu} data-testid="menu">
      <MenuSection title="Appetizers" items={appetizers} />
      <MenuSection title="Entrees" items={entrees} />
      <MenuSection title="Desserts" items={desserts} />
    </div>
  );
};

export default Menu;
