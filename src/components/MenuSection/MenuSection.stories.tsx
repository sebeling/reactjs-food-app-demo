import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import MenuSection from './MenuSection';

const meta = {
  title: 'Components/MenuSection',
  component: MenuSection,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      );
    },
  ],
  args: {},
} satisfies Meta<typeof MenuSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
  },
};
