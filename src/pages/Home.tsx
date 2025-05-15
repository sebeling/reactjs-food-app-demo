import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Food App Demo</h1>
      <p>
        <Link to={'/menu'}>View our menu</Link>
      </p>
    </div>
  );
};

export default HomePage;
