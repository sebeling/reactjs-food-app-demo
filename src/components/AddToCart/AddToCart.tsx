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
    <div className={styles['add-to-cart']} data-testid="add-to-cart">
      <div className={styles['add-to-cart-quantity']}>
        <button
          onClick={() => dispatch(cartActions.removeItemFromCart(item.id))}
          data-testid="cart-decrement-btn"
        >
          -
        </button>
        <span>{cartQuantity}</span>
        <button
          onClick={() => dispatch(cartActions.addItemToCart(item))}
          data-testid="cart-increment-btn"
        >
          +
        </button>
      </div>
      <button
        className={styles['add-to-cart-btn']}
        onClick={() => dispatch(cartActions.addItemToCart(item))}
        data-testid="add-to-cart-btn"
      >
        Add to Cart - {convertNumberToUSDollars(item.price)}
      </button>
    </div>
  );
};

export default AddToCart;
