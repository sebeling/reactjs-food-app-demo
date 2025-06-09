import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { testingMockStore } from '../../setupTests';
import Menu from './Menu';

describe('Menu', () => {
  it('renders the component', () => {
    render(
      <Provider store={testingMockStore}>
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
      </Provider>
    );

    const menu = screen.getByTestId('menu');

    expect(menu).toBeTruthy();
  });
});
