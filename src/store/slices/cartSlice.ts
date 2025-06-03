import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type CartContext } from '../../interfaces/CartContext';
import { type MenuItemInfo } from '../../interfaces/MenuItemInfo';

const initialState: CartContext = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<MenuItemInfo>) => {
      const cartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.item.id === action.payload.id
      );

      if (cartItemIndex === -1) {
        state.items.push({
          item: action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      } else {
        state.items[cartItemIndex].quantity++;

        state.items[cartItemIndex].total =
          state.items[cartItemIndex].item.price *
          state.items[cartItemIndex].quantity;
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const cartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.item.id === action.payload
      );

      if (cartItemIndex === -1) {
        return;
      }

      if (state.items[cartItemIndex].quantity > 1) {
        state.items[cartItemIndex].quantity--;

        state.items[cartItemIndex].total =
          state.items[cartItemIndex].item.price *
          state.items[cartItemIndex].quantity;
      } else {
        state.items.splice(cartItemIndex, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
