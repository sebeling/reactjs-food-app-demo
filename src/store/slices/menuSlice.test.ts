import { menuSlice, menuActions } from './menuSlice';

import { type MenuItemInfo } from '../../interfaces/MenuItemInfo';

describe('menu reducer', () => {
  const initialState = {
    items: [],
  };

  it('should add menu items when addItems is called', () => {
    const menuItem: MenuItemInfo = {
      id: 'mi-1',
      slug: 'classic-mac-and-cheese',
      name: 'Classic Mac & Cheese',
      price: 8.99,
      description:
        'Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.',
      image: 'images/menu-items/mac-and-cheese.jpg',
      type: 'appetizer',
    };

    const nextState = menuSlice.reducer(
      initialState,
      menuActions.addItems([menuItem])
    );

    expect(nextState.items.length).toEqual(1);
  });
});
