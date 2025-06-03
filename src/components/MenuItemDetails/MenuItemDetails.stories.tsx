import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import MenuItemDetails from './MenuItemDetails';

const meta = {
  title: 'Components/MenuItemDetails',
  component: MenuItemDetails,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      );
    },
  ],
} satisfies Meta<typeof MenuItemDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
  },
};
