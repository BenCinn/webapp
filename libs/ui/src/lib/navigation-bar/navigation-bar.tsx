import styles from './navigation-bar.module.css';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

export function NavigationBar(props: NavigationBarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NavigationBar!</h1>
    </div>
  );
}

export default NavigationBar;
