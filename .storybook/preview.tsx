import type { Preview } from '@storybook/react';
// import { themes, ensure } from '@storybook/theming';
import { Provider } from 'react-redux';

import { store } from '../src/store/store';

// Import Global Styles from React app
import '../src/index.css';
import './stories.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: { title: 'Table of Contents' }, //Enables the table of contents
      // theme: ensure(themes.dark), // The replacement theme to use
    },
  },
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
};

export default preview;
