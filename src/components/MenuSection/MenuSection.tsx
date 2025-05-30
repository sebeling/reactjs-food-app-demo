import MenuListItem from '../MenuListItem/MenuListItem';
import { type MenuItemInfo } from '../../interfaces/MenuItemInfo';
import styles from './MenuSection.module.css';

export interface MenuSectionProps {
  title: string;
  items: MenuItemInfo[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <div className={styles['menu-section']}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <MenuListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
