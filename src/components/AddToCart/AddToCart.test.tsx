import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import AddToCart from './AddToCart';
import { type AddToCartProps } from './AddToCart';
import { store } from '../../store/store';

describe('AddToCart', () => {
  const testItem = {
    id: 'mi-1',
    slug: 'classic-mac-and-cheese',
    name: 'Classic Mac & Cheese',
    price: 8.99,
    description:
      'Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.',
    image: 'images/menu-items/mac-and-cheese.jpg',
    type: 'appetizer',
  };

  const props: AddToCartProps = {
    item: testItem,
  };

  it('renders the component', () => {
    render(
      <Provider store={store}>
        <AddToCart {...props} />
      </Provider>
    );

    const addToCart = screen.getByTestId('add-to-cart');
    expect(addToCart).toBeTruthy();
  });

  it('adds item to cart when Add to Cart button is clicked', async () => {
    render(
      <Provider store={store}>
        <AddToCart {...props} />
      </Provider>
    );

    const addToCartBtn = screen.getByTestId('add-to-cart-btn');
    fireEvent.click(addToCartBtn);

    const storeState = store.getState();

    expect(storeState.cart.items.length).toEqual(1);
  });

  it('adds item to cart when the increment quanity button is clicked', () => {
    render(
      <Provider store={store}>
        <AddToCart {...props} />
      </Provider>
    );

    const incrementQuantityBtn = screen.getByTestId('cart-increment-btn');
    fireEvent.click(incrementQuantityBtn);

    const storeState = store.getState();

    expect(storeState.cart.items[0].quantity).toEqual(2);
  });

  it('removes item from cart when the decrement quanity button is clicked', () => {
    render(
      <Provider store={store}>
        <AddToCart {...props} />
      </Provider>
    );

    const decrementQuantityBtn = screen.getByTestId('cart-decrement-btn');
    fireEvent.click(decrementQuantityBtn);

    const storeState = store.getState();

    expect(storeState.cart.items[0].quantity).toEqual(1);
  });
});
