import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MenuListItem, { type MenuListItemProps } from './MenuListItem';

describe('MenuListItem', () => {
  let props: MenuListItemProps;

  beforeEach(() => {
    props = {
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
    };
  });

  it('renders the component', () => {
    render(
      <BrowserRouter>
        <MenuListItem {...props} />
      </BrowserRouter>
    );

    const menuListItem = screen.getByTestId('menu-list-item');

    expect(menuListItem).toBeTruthy();
  });
});
