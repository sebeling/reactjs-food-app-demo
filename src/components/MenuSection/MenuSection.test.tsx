import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MenuSection, { type MenuSectionProps } from './MenuSection';

describe('MenuSection', () => {
  let props: MenuSectionProps;

  beforeEach(() => {
    props = {
      title: 'Appetizers',
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
    };
  });

  it('renders the component', () => {
    render(
      <BrowserRouter>
        <MenuSection {...props} />
      </BrowserRouter>
    );

    const menuSection = screen.getByTestId('menu-section');

    expect(menuSection).toBeTruthy();
  });
});
