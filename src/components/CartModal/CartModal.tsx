import { useEffect, useRef, type MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './CartModal.module.css';
import { uiActions } from '../../store/slices/uiSlice';
import { convertNumberToUSDollars } from '../../utils/formattingUtils';

const CartModal: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);
  const isOpen = useAppSelector((state) => state.ui.isCartModalVisible);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    if (isOpen) {
      dispatch(uiActions.toggleCartModal());
    }
  };

  const handleClickModal = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target instanceof HTMLDialogElement) {
      handleCloseModal();
    }
  };

  const calculateCartTotal = () => {
    return cartItems.reduce((total, cartItem) => total + +cartItem.total, 0);
  };

  const calculateCartTotalTaxes = (total: number, taxPercentage: number) => {
    return total * taxPercentage;
  };

  const cartTotal = calculateCartTotal();
  const cartTax = calculateCartTotalTaxes(cartTotal, 0.09);

  return (
    <dialog
      className={styles['cart-modal']}
      ref={dialogRef}
      onClose={handleCloseModal}
      onClick={handleClickModal}
      data-testid="cart-modal"
    >
      <div className={styles['cart-modal-content']}>
        <section className={styles['cart-modal-header']}>
          <h2>Your Order</h2>
          <button
            data-testid="modal-close-button"
            aria-label="Close"
            type="button"
            className={styles['cart-modal-close-btn']}
            onClick={handleCloseModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M1 0.875L14 13.875M14 0.875L1 13.875"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </section>
        <section
          className={styles['cart-modal-body']}
          data-testid="cart-modal-body"
        >
          {cartItems.length > 0 && (
            <ul>
              {cartItems.map((cartItem) => (
                <li key={cartItem.item.id}>
                  <div>{cartItem.quantity}</div>
                  <div className={styles['cart-modal-body-item']}>
                    {cartItem.item.name}
                  </div>
                  <div>{convertNumberToUSDollars(cartItem.total)}</div>
                </li>
              ))}
            </ul>
          )}
          {!cartItems.length && <p>No items have been added to your cart.</p>}
        </section>
        <section className={styles['cart-modal-footer']}>
          <div>
            <span>Subtotal:</span>
            <span>{convertNumberToUSDollars(cartTotal)}</span>
          </div>
          <div>
            <span>Tax:</span>
            <span>{convertNumberToUSDollars(cartTax)}</span>
          </div>
          <div>
            <button>
              <span>Checkout:</span>
              <span>{convertNumberToUSDollars(cartTotal + cartTax)}</span>
            </button>
          </div>
        </section>
      </div>
    </dialog>
  );
};

export default CartModal;
