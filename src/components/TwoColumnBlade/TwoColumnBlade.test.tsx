import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TwoColumnBlade, { type TwoColumnBladeProps } from './TwoColumnBlade';

describe('TwoColumnBlade', () => {
  let props: TwoColumnBladeProps;

  beforeEach(() => {
    props = {
      image: '/images/private-events.avif',
      flipColumns: false,
      children: (
        <>
          <h2>Private Events</h2>
          <div>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </div>
          <Link to="/" className="cta">
            Private Event Info
          </Link>
        </>
      ),
    };
  });

  it('renders the component', () => {
    render(
      <BrowserRouter>
        <TwoColumnBlade {...props} />
      </BrowserRouter>
    );

    const twoColumnBlade = screen.getByTestId('two-col-blade');

    expect(twoColumnBlade).toBeTruthy();
  });

  it('renders the component with columns flipped', () => {
    const updatedProps = { ...props };
    updatedProps.flipColumns = true;

    render(
      <BrowserRouter>
        <TwoColumnBlade {...updatedProps} />
      </BrowserRouter>
    );

    const twoColumnBlade = screen.getByTestId('two-col-blade');

    expect(twoColumnBlade).toBeTruthy();
  });
});
