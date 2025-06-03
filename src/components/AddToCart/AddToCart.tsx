import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { cartActions } from '../../store/slices/cartSlice';
import { type MenuItemInfo } from '../../interfaces/MenuItemInfo';
import { convertNumberToUSDollars } from '../../utils/formattingUtils';
import styles from './AddToCart.module.css';

export interface AddToCartProps {
  item: MenuItemInfo;
}

const AddToCart: React.FC<AddToCartProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const cartInfo = useAppSelector((state) =>
    state.cart.items.find((cartItem) => cartItem.item.id === item.id)
  );

  const cartQuantity = cartInfo ? cartInfo.quantity : 0;

  return (
    <div className={styles['add-to-cart']}>
      <div className={styles['add-to-cart-quantity']}>
        <button
          onClick={() => dispatch(cartActions.removeItemFromCart(item.id))}
        >
          -
        </button>
        <span>{cartQuantity}</span>
        <button onClick={() => dispatch(cartActions.addItemToCart(item))}>
          +
        </button>
      </div>
      <button
        className={styles['add-to-cart-btn']}
        onClick={() => dispatch(cartActions.addItemToCart(item))}
      >
        Add to Cart - {convertNumberToUSDollars(item.price)}
      </button>
    </div>
  );
};

export default AddToCart;
