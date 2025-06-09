import styles from './Notifications.module.css';

const Notifications = () => {
  return (
    <div className={styles.notifications} data-testid="notifications">
      <p className={styles.notification}>
        We accept reservations for parties of 6 or more! Please call ahead to
        ensure we can accommodate you.
      </p>
    </div>
  );
};

export default Notifications;
