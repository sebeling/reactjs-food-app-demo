import type { Meta, StoryObj } from '@storybook/react';
import { Link, BrowserRouter } from 'react-router-dom';

import TwoColumnBlade from './TwoColumnBlade';

const meta = {
  title: 'Components/TwoColumnBlade',
  component: TwoColumnBlade,
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
} satisfies Meta<typeof TwoColumnBlade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: '/images/private-events.avif',
    flipColumns: false,
    children: (
      <>
        <h2>Private Events</h2>
        <div>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </div>
        <Link to="/" className="cta">
          Private Event Info
        </Link>
      </>
    ),
  },
};
