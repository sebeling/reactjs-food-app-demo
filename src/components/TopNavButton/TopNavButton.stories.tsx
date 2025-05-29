import type { Meta, StoryObj } from '@storybook/react';

import TopNavButton from './TopNavButton';

const meta = {
  title: 'Components/TopNavButton',
  component: TopNavButton,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
  decorators: [
    (Story) => {
      return (
        <div style={{ position: 'relative' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof TopNavButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    onClick: () => {},
  },
};
