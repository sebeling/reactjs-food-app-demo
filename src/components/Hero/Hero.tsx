import styles from './Hero.module.css';

export interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  const values = title.split(' ');

  return (
    <div className={styles.hero} data-testid="hero">
      <div
        className={styles['title-container']}
        aria-label={values.join(' ')}
        role="heading"
        aria-level={1}
      >
        {values.map((val, index) => (
          <div className={styles['title-col']} key={val}>
            <span className={`${styles.title} invisible`}>{val}</span>
            <div
              className={`${
                styles['title-item-' + (index + 1) + 's']
              } slide-up-element-${index + 1}s}`}
            >
              <span className={`${styles.title} fade-in-element-${index + 2}s`}>
                {val}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
