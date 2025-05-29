import { type ReactNode } from 'react';

import styles from './TwoColumnBlade.module.css';

export interface TwoColumnBladeProps {
  image: string;
  children: ReactNode;
  flipColumns: boolean;
}

const TwoColumnBlade: React.FC<TwoColumnBladeProps> = ({
  image,
  children,
  flipColumns,
}) => {
  const imagePath = ` url('http://localhost:8080${image}')`;

  const imageContent = (
    <div
      style={{ backgroundImage: imagePath }}
      className={styles['image-content']}
    ></div>
  );

  const infoContent = <div className={styles['info-content']}>{children}</div>;

  const leftColOrderClass = flipColumns ? styles.right : styles.left;
  const rightColOrderClass = flipColumns ? styles.left : styles.right;

  return (
    <section className={styles['two-col-blade']}>
      <div className={`${styles['left-col']} ${leftColOrderClass}`}>
        {infoContent}
      </div>
      <div className={`${styles['right-col']} ${rightColOrderClass}`}>
        {imageContent}
      </div>
    </section>
  );
};

export default TwoColumnBlade;
