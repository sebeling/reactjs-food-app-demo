import { Link } from 'react-router-dom';
import TwoColumnBlade from '../TwoColumnBlade/TwoColumnBlade';
import AddToCart from '../AddToCart/AddToCart';
import { type MenuItemInfo } from '../../interfaces/MenuItemInfo';
import styles from './MenuItemDetails.module.css';

export interface MenuItemDetailsProps {
  item: MenuItemInfo;
}

const MenuItemDetails: React.FC<MenuItemDetailsProps> = ({ item }) => {
  return (
    <div
      className={styles['menu-item-details']}
      data-testid="menu-item-details"
    >
      <Link to="/menu" className={styles['menu-item-details-back']}>
        Back to Menu
      </Link>
      <TwoColumnBlade image={item.image} imageTopMobile={true}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <AddToCart item={item} />
      </TwoColumnBlade>
    </div>
  );
};

export default MenuItemDetails;
