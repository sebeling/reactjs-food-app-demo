import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { uiActions } from '../../store/slices/uiSlice';
import TopNavButton from '../TopNavButton/TopNavButton';
import styles from './TopNavigation.module.css';

const TopNavigation: React.FC = () => {
  const dispatch = useAppDispatch();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleTopNavBtnClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClasses = isNavOpen
    ? `${styles['top-nav']} ${styles.visible}`
    : styles['top-nav'];

  return (
    <header className={styles.header} data-testid="top-navigation">
      <div className={styles.logo}>
        <Link to="/">
          <img
            src="http://localhost:8080/images/logo.jpeg"
            alt="Food App Logo"
          />
          <span>Taste. Savor. Repeat.</span>
        </Link>
      </div>
      <nav
        className={navClasses}
        aria-label="Main Navigation"
        data-testid="top-navigation-nav"
      >
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
          <li>
            <NavLink
              to="/hours-and-location"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Hours & Location
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservations"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              data-testid="about-nav-link"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <button
              className={styles.cartBtn}
              aria-label={`Cart with ${totalCartItems} items`}
              aria-controls="cart-control"
              aria-expanded="false"
              onClick={() => dispatch(uiActions.toggleCartModal())}
              data-testid="cart-button"
            >
              <div aria-hidden="true" className={styles['cartBtn-wrapper']}>
                <svg
                  className="cartIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                >
                  <path
                    d="M5.12112 16.5H12.6368V5.22649H1.36328V16.5L3.2422 14.6211L5.12112 16.5ZM5.12112 16.5V5.22649M3.24219 5.22652V3.59813C3.24219 3.59813 3.21088 1.5 5.12111 1.5C6.96871 1.5 7.00003 3.59813 7.00003 3.59813M7.00003 3.59813V5.22652M7.00003 3.59813C7.00003 3.59813 6.96871 1.5 8.87895 1.5C10.7266 1.5 10.7579 3.59813 10.7579 3.59813V5.22652"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Cart ({totalCartItems})
              </div>
            </button>
          </li>
        </ul>
      </nav>
      <TopNavButton
        isOpen={isNavOpen}
        onClick={handleTopNavBtnClick}
        data-testid="top-nav-btn"
      />
    </header>
  );
};

export default TopNavigation;
