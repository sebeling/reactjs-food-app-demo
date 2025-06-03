import { createSlice } from '@reduxjs/toolkit';

import { type UIContext } from '../../interfaces/UIContext';

const initialState: UIContext = {
  isCartModalVisible: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCartModal: (state) => {
      state.isCartModalVisible = !state.isCartModalVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
