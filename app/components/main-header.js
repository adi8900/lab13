import Link from 'next/link';
import styles from './main-header.module.css';
import Logo from './Logo';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header className={styles.header}>
        <Logo />
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink href="/meals">Meals</NavLink>
          </li>
          <li>
            <NavLink href="/meals/share">Share a Meal</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
