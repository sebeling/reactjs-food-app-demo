import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TextEncoder, TextDecoder } from 'util';

import { uiSlice } from './store/slices/uiSlice';

Object.assign(global, { TextDecoder, TextEncoder });

const mockMenuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [
      {
        id: 'mi-1',
        slug: 'classic-mac-and-cheese',
        name: 'Classic Mac & Cheese',
        price: 8.99,
        description:
          'Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.',
        image: 'images/menu-items/mac-and-cheese.jpg',
        type: 'appetizer',
      },
      {
        id: 'mi-3',
        slug: 'caesar-salad',
        name: 'Caesar Salad',
        price: 7.99,
        description:
          'Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.',
        image: 'images/menu-items/caesar-salad.jpg',
        type: 'appetizer',
      },
    ],
  },
  reducers: {},
});

const mockCartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      {
        item: {
          id: 'mi-1',
          slug: 'classic-mac-and-cheese',
          name: 'Classic Mac & Cheese',
          price: 8.99,
          description:
            'Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.',
          image: 'images/menu-items/mac-and-cheese.jpg',
          type: 'appetizer',
        },
        quantity: 2,
        total: 17.98,
      },
    ],
  },
  reducers: {
    addItemToCart: (state) => {
      state.items[0].quantity++;
    },
    removeItemFromCart: (state) => {
      state.items[0].quantity--;
    },
  },
});

export const testingMockStore = configureStore({
  reducer: {
    menu: mockMenuSlice.reducer,
    cart: mockCartSlice.reducer,
    ui: uiSlice.reducer,
  },
});
