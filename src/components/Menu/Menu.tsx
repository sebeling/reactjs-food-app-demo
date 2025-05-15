import { useAppSelector } from '../../app/hooks';

import styles from './Menu.module.css';

const Menu: React.FC = () => {
  const { items } = useAppSelector((state) => state.menu);

  return (
    <div className={styles.menu}>
      <h1>Menu</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
