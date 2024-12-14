import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Inicio
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.navLink}>
            Sobre Mí
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contacto" className={styles.navLink}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}