import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <h3 style={{ fontFamily: 'var(--font-headline)' }}>Hemp Settlement</h3>
          <p>Wszystko czego potrzebujesz. Nic czego nie potrzebujesz.</p>
        </div>
        <div className={styles.links}>
          <Link href="/">Strona Główna</Link>
          <Link href="/sklep">Sklep</Link>
          <Link href="/wspolpraca">Współpraca (B2B)</Link>
          <Link href="/o-nas">O nas</Link>
        </div>
        <div className={styles.contact}>
          <p>plac Wiosny Ludów 2</p>
          <p>61-831 Poznań</p>
          <p>simon@hempsettlement.pl</p>
          <p>+48 794 599 670</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Hemp Settlement. All rights reserved. Botanical Prestige.</p>
      </div>
    </footer>
  );
}
