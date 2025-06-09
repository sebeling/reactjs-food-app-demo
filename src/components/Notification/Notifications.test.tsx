import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders the component', () => {
    render(<Notifications />);

    const notifications = screen.getByTestId('notifications');

    expect(notifications).toBeTruthy();
  });
});
