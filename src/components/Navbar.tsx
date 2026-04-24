"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { items, totalItems, totalPrice, removeFromCart } = useCart();

  // Scroll handler for hiding/showing navbar
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Always show at the very top
        if (currentScrollY < 10) {
          setIsVisible(true);
          setLastScrollY(currentScrollY);
          return;
        }

        // Don't hide if mobile menu or cart is open
        if (isMobileMenuOpen || isDrawerOpen) {
          setIsVisible(true);
          return;
        }

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMobileMenuOpen, isDrawerOpen]);

  // Close mobile menu when a link is clicked
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent scrolling when menus are open
  useEffect(() => {
    if (isDrawerOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen, isMobileMenuOpen]);

  return (
    <>
      <nav className={`${styles.navbar} ${!isVisible ? styles.navbarHidden : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logoContainer} onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src="/hempsettlement-prev/images/cropped-LOGO-1.png" 
              alt="Hemp Settlement Logo" 
              width={220} 
              height={75} 
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }} 
              priority 
            />
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
            <button 
              className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <Link href="/" onClick={handleMobileMenuClick}>Strona Główna</Link>
        <Link href="/sklep" onClick={handleMobileMenuClick} className={styles.goldLink}>Sklep</Link>
        <Link href="/wspolpraca" onClick={handleMobileMenuClick}>Współpraca</Link>
        <Link href="/o-nas" onClick={handleMobileMenuClick}>O nas</Link>
        <a 
          href="https://www.instagram.com/hempsettlement/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.igBtn} ${styles.igBtnMobile}`}
          onClick={handleMobileMenuClick}
        >
          Instagram
        </a>
      </div>

      {/* Cart Drawer */}
      <div className={`${styles.drawerOverlay} ${isDrawerOpen ? styles.open : ''}`} onClick={() => setIsDrawerOpen(false)}></div>
      <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <h3>Twój Koszyk</h3>
          <button onClick={() => setIsDrawerOpen(false)} aria-label="Zamknij">&times;</button>
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
