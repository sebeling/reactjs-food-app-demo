import { Outlet } from 'react-router-dom';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <TopNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
