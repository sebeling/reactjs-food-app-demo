import { Link } from 'react-router-dom';

import { type MenuItemInfo } from '../../interfaces/MenuItemInfo';
import { convertNumberToUSDollars } from '../../utils/formattingUtils';
import styles from './MenuListItem.module.css';

export interface MenuListItemProps {
  item: MenuItemInfo;
}

const MenuListItem: React.FC<MenuListItemProps> = ({ item }) => {
  const { slug, name, image, description, price } = item;

  return (
    <li className={styles['menu-list-item']}>
      <Link to={`/menu/${slug}`} className={styles['menu-list-item-link']}>
        <img src={`http://localhost:8080/${image}`} alt={name} />
        <div className={styles['menu-list-item-content']}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p className={styles['menu-list-item-price']}>
            {convertNumberToUSDollars(+price)}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default MenuListItem;
