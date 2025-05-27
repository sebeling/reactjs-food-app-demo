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

  const leftColContent = flipColumns ? infoContent : imageContent;
  const rightColContent = flipColumns ? imageContent : infoContent;

  return (
    <section className={styles['two-col-blade']}>
      <div className={styles['left-col']}>{leftColContent}</div>
      <div className={styles['right-col']}>{rightColContent}</div>
    </section>
  );
};

export default TwoColumnBlade;
