import type { Meta, StoryObj } from '@storybook/react';

import Hero from './Hero';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Hero Title',
  },
};
