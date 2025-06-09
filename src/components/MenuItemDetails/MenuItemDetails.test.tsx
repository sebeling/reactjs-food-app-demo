import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { testingMockStore } from '../../setupTests';
import MenuItemDetails, { type MenuItemDetailsProps } from './MenuItemDetails';

describe('MenuItemDetails', () => {
  let props: MenuItemDetailsProps;

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
      <Provider store={testingMockStore}>
        <BrowserRouter>
          <MenuItemDetails {...props} />
        </BrowserRouter>
      </Provider>
    );

    const menuItemDetails = screen.getByTestId('menu-item-details');

    expect(menuItemDetails).toBeTruthy();
  });
});
