import { configureStore } from '@reduxjs/toolkit';

import { menuSlice } from './slices/menuSlice';
import { cartSlice } from './slices/cartSlice';
import { uiSlice } from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
