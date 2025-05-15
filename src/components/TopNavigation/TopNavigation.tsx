import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/icon.jpg';
import styles from './TopNavigation.module.css';

const TopNavigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Food App Logo" />
        </Link>
      </div>
      <nav className={styles['top-nav']} aria-label="Main Navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Menu
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNavigation;
