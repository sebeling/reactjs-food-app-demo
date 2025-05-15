import { createSlice } from '@reduxjs/toolkit';

import { type MenuContext } from '../../interfaces/MenuContext';

const getInitialState = async (): Promise<MenuContext> => {
  const response = await fetch('http://localhost:8080/menu-items');

  if (!response.ok) {
    console.error('Failed to fetch menu items data!');
    return { items: [] };
  }

  const items = await response.json();
  return { items };
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState: await getInitialState(),
  reducers: {},
});

export const menuActions = menuSlice.actions;
