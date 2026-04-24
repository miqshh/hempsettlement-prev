"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { items, totalItems, totalPrice, removeFromCart } = useCart();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/">
            <Image src="/images/cropped-LOGO-1.png" alt="Hemp Settlement Logo" width={220} height={75} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div className={styles.navLinks}>
            <Link href="/">Strona Główna</Link>
            <Link href="/sklep">Sklep</Link>
            <Link href="/wspolpraca">Współpraca</Link>
            <Link href="/o-nas">O nas</Link>
          </div>
          <div className={styles.navActions}>
            <a href="https://www.instagram.com/hempsettlement/" target="_blank" rel="noopener noreferrer" className={styles.igBtn}>
              Instagram
            </a>
            <button className={styles.cartBtn} onClick={() => setIsDrawerOpen(true)}>
              Koszyk ({totalItems})
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <div className={`${styles.drawerOverlay} ${isDrawerOpen ? styles.open : ''}`} onClick={() => setIsDrawerOpen(false)}></div>
      <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <h3>Twój Koszyk</h3>
          <button onClick={() => setIsDrawerOpen(false)}>&times;</button>
        </div>
        <div className={styles.drawerContent}>
          {items.length === 0 ? (
            <p>Twój koszyk konesera jest obecnie pusty.</p>
          ) : (
            <div className={styles.cartItems}>
              {items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.cartItemImage}>
                    <Image src={item.imageSrc} alt={item.name} width={60} height={60} style={{ objectFit: 'contain' }} />
                  </div>
                  <div className={styles.cartItemDetails}>
                    <h4>{item.name}</h4>
                    <p>{item.price} x {item.quantity}</p>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Usuń</button>
                </div>
              ))}
              <div className={styles.cartSummary}>
                <div className={styles.cartTotal}>
                  <span>Suma:</span>
                  <span>{totalPrice.toFixed(2)} zł</span>
                </div>
                <Link href="/checkout" className={styles.checkoutBtn} onClick={() => setIsDrawerOpen(false)}>
                  Przejdź do płatności
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
