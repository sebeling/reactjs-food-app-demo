import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testingMockStore } from '../../setupTests';
import TopNavigation from './TopNavigation';

describe('TopNavigation', () => {
  it('renders the component', () => {
    render(
      <Provider store={testingMockStore}>
        <BrowserRouter>
          <TopNavigation />
        </BrowserRouter>
      </Provider>
    );

    const topNavigation = screen.getByTestId('top-navigation');

    expect(topNavigation).toBeTruthy();
  });

  it('has the class name visible on the main navigation nav element when isOpen is set to true', () => {
    render(
      <Provider store={testingMockStore}>
        <BrowserRouter>
          <TopNavigation />
        </BrowserRouter>
      </Provider>
    );

    const topNavBtn = screen.getByTestId('top-nav-btn');
    fireEvent.click(topNavBtn);

    const topNav = screen.getByTestId('top-navigation-nav');

    expect(topNav).toHaveClass('visible');
  });

  it('displays the cart modal when the cart button is clicked', () => {
    render(
      <Provider store={testingMockStore}>
        <BrowserRouter>
          <TopNavigation />
        </BrowserRouter>
      </Provider>
    );

    const cartBtn = screen.getByTestId('cart-button');
    fireEvent.click(cartBtn);

    const storeState = testingMockStore.getState();

    expect(storeState.ui.isCartModalVisible).toBeTruthy();
  });

  it('should apply active class to the correct Home NavLink by default', () => {
    render(
      <Provider store={testingMockStore}>
        <BrowserRouter>
          <TopNavigation />
        </BrowserRouter>
      </Provider>
    );

    const homeNavLink = screen.getByText('Home');

    expect(homeNavLink).toHaveClass('active'); // Assuming you're using the default active class
  });

  it('should apply active class to NavLinks when clicked', () => {
    render(
      <Provider store={testingMockStore}>
        <BrowserRouter>
          <TopNavigation />
        </BrowserRouter>
      </Provider>
    );

    const navLinks = [
      screen.getByText('Menu'),
      screen.getByText('Hours & Location'),
      screen.getByText('Reservations'),
      screen.getByText('About'),
    ];

    for (const link of navLinks) {
      fireEvent.click(link);

      expect(link).toHaveClass('active');
    }
  });
});
