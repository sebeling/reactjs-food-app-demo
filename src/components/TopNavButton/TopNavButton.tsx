import styles from './TopNavButton.module.css';

export interface TopNavButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const TopNavButton: React.FC<TopNavButtonProps> = ({ isOpen, onClick }) => {
  const btnOpenClass = isOpen
    ? `${styles['top-nav-btn']} ${styles.open}`
    : styles['top-nav-btn'];

  const navBtnLabel = isOpen ? 'Close' : 'Toggle Navigation';

  return (
    <button className={btnOpenClass} onClick={onClick}>
      <span className="sr-only">{navBtnLabel}</span>
      <span className={styles['top-nav-btn-line']}></span>
      <span className={styles['top-nav-btn-line']}></span>
      <span className={styles['top-nav-btn-line']}></span>
    </button>
  );
};

export default TopNavButton;
