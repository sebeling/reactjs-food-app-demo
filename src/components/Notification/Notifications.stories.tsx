import type { Meta, StoryObj } from '@storybook/react';

import Notifications from './Notifications';

const meta = {
  title: 'Components/Notifications',
  component: Notifications,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
