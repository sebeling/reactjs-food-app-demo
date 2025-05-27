import { Outlet } from 'react-router-dom';

import Notifications from '../components/Notification/Notifications';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <Notifications />
      <TopNavigation />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
