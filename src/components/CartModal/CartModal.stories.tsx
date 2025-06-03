import type { Meta, StoryObj } from '@storybook/react';

import CartModal from './CartModal';

const meta = {
  title: 'Components/CartModal',
  component: CartModal,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
  decorators: [
    (Story) => {
      return (
        <div className="sb_show">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof CartModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
