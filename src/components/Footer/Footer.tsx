import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles['footer-content']}>
        <nav className={styles['footer-nav']}>
          <ul>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Press</Link>
            </li>
            <li>
              <Link to="/">Merchandise</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles['info-bar']}>
        <a href="mailto:steve.ebeling@gmail.com">Steven Ebeling</a>
        &#x2022; <a href="tel:2062908889">(206) 290-8889</a>&#x2022;
        <a href="mailto:steve.ebeling@gmail.com">steve.ebeling@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
