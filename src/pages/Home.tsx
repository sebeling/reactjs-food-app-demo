import { Link } from 'react-router-dom';

import Hero from '../components/Hero/Hero';
import TwoColumnBlade from '../components/TwoColumnBlade/TwoColumnBlade';

const HomePage = () => {
  return (
    <main>
      <Hero title="Taste. Savor. Repeat." />
      <TwoColumnBlade image="/images/private-events.avif" flipColumns={true}>
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
      </TwoColumnBlade>
      <TwoColumnBlade image="/images/bar-seating.avif" flipColumns={false}>
        <h2>Our hours & location</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Link to="/" className="cta">
          More Info
        </Link>
      </TwoColumnBlade>
    </main>
  );
};

export default HomePage;
