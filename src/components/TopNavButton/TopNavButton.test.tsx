import { render, screen } from '@testing-library/react';
import TopNavButton, { type TopNavButtonProps } from './TopNavButton';

describe('TopNavButton', () => {
  let props: TopNavButtonProps;

  beforeEach(() => {
    props = {
      isOpen: false,
      onClick: () => {},
    };
  });

  it('renders the component', () => {
    render(<TopNavButton {...props} />);

    const topNavButton = screen.getByTestId('top-nav-btn');

    expect(topNavButton).toBeTruthy();
  });

  it('does not have open class when isOpen is false', () => {
    render(<TopNavButton {...props} />);

    const topNavButton = screen.getByTestId('top-nav-btn');

    expect(topNavButton).not.toHaveClass('open');
  });

  it('does have open class when isOpen is true', () => {
    props.isOpen = true;

    render(<TopNavButton {...props} />);

    const topNavButton = screen.getByTestId('top-nav-btn');

    expect(topNavButton).toHaveClass('open');
  });
});
