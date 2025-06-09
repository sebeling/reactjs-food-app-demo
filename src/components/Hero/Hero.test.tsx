import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Footer', () => {
  it('renders the component', () => {
    const heroTitle = 'Hero Test';

    render(<Hero title={heroTitle} />);

    const hero = screen.getByTestId('hero');

    expect(hero).toBeTruthy();
  });
});
