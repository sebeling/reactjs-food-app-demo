import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type MenuContext } from '../../interfaces/MenuContext';
import { type MenuItemInfo } from '../../interfaces/MenuItemInfo';

const initialState: MenuContext = {
  items: [],
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<MenuItemInfo[]>) => {
      state.items = action.payload;
    },
  },
});

export const menuActions = menuSlice.actions;
