import { MainHeader } from './MainHeader';
import { NavBar } from './NavBar';
import { TopBar } from './TopBar';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <TopBar />
      <div className="container">
        <MainHeader />
      </div>
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
};
