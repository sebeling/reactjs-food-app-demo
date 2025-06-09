import * as React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';

import { testingMockStore } from '../../setupTests';
import CartModal from './CartModal';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { cartSlice } from '../../store/slices/cartSlice';
import { uiSlice } from '../../store/slices/uiSlice';

describe('CartModal', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
  });

  it('renders the component invisible when isCartModalVisible is false', () => {
    render(
      <Provider store={testingMockStore}>
        <CartModal />
      </Provider>
    );

    const cartModal = screen.getByTestId('cart-modal');

    expect(cartModal).toBeTruthy();
    expect(cartModal).not.toBeVisible();
  });

  it('calls showModal on dialog ref when isCartModalVisible is true', () => {
    const updatedUiSlice = createSlice({
      name: 'ui',
      initialState: {
        isCartModalVisible: true,
      },
      reducers: {},
    });

    const updatedTestingMockStore = configureStore({
      reducer: { cart: cartSlice.reducer, ui: updatedUiSlice.reducer },
    });

    const spy = jest.spyOn(HTMLDialogElement.prototype, 'showModal');

    render(
      <Provider store={updatedTestingMockStore}>
        <CartModal />
      </Provider>
    );

    expect(spy).toHaveBeenCalled();
  });

  it('closes modal when clicking outside of the modal', () => {
    const updatedUiSlice = createSlice({
      name: 'ui',
      initialState: {
        isCartModalVisible: true,
      },
      reducers: {},
    });

    const updatedTestingMockStore = configureStore({
      reducer: { cart: cartSlice.reducer, ui: updatedUiSlice.reducer },
    });

    const spy = jest.spyOn(HTMLDialogElement.prototype, 'close');
    const useRefSpy = jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: null });

    render(
      <Provider store={updatedTestingMockStore}>
        <CartModal />
      </Provider>
    );

    const cartModal = screen.getByTestId('cart-modal');
    fireEvent.click(cartModal);

    expect(spy).toHaveBeenCalled();
    expect(useRefSpy).toBeCalledWith(null);
  });

  it('displays no items in cart message when no items haven been added', () => {
    const updatedTestingMockStore = configureStore({
      reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
    });

    render(
      <Provider store={updatedTestingMockStore}>
        <CartModal />
      </Provider>
    );

    const { getByText } = within(screen.getByTestId('cart-modal-body'));

    expect(
      getByText('No items have been added to your cart.')
    ).toBeInTheDocument();
  });
});
