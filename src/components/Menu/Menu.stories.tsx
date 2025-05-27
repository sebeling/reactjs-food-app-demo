import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
