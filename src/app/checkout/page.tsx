"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className={`container ${styles.successContainer}`}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h1 className="headline-lg">Dziękujemy za zaufanie</h1>
          <p>Twoje zamówienie zostało przekazane do realizacji. Potwierdzenie wysłaliśmy na Twój adres e-mail.</p>
          <Link href="/" className="btn-primary">Wróć do strony głównej</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={`container ${styles.emptyContainer}`}>
        <h1 className="headline-lg">Twój Koszyk jest pusty</h1>
        <p>Dodaj produkty do koszyka, aby przejść do płatności.</p>
        <Link href="/sklep" className="btn-primary">Przejdź do sklepu</Link>
      </div>
    );
  }

  return (
    <div className={`container section-gap`}>
      <header className={styles.header}>
        <h1 className="headline-lg">Podsumowanie Zamówienia</h1>
        <p className={styles.subtitle}>Finalizacja Twojego botanicznego wyboru.</p>
      </header>

      <div className={styles.checkoutGrid}>
        <div className={styles.itemsSection}>
          <h2 className={styles.sectionTitle}>Twoje Produkty</h2>
          {items.map((item) => (
            <div key={item.id} className={styles.checkoutItem}>
              <div className={styles.itemImage}>
                <Image src={item.imageSrc} alt={item.name} width={80} height={80} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.itemPrice}>{item.price} x {item.quantity}</p>
              </div>
              <div className={styles.itemTotal}>
                {(parseFloat(item.price.replace(",", ".").replace(/[^0-9.-]+/g, "")) * item.quantity).toFixed(2)} zł
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summarySection}>
          <div className={styles.summaryCard}>
            <h2 className={styles.sectionTitle}>Podsumowanie</h2>
            <div className={styles.summaryRow}>
              <span>Wartość produktów:</span>
              <span>{totalPrice.toFixed(2)} zł</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Dostawa:</span>
              <span>0,00 zł (Darmowa)</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Suma:</span>
              <span>{totalPrice.toFixed(2)} zł</span>
            </div>
            
            <button 
              className={styles.payBtn} 
              onClick={handlePayment} 
              disabled={isProcessing}
            >
              {isProcessing ? "Przetwarzanie..." : "Zapłać teraz"}
            </button>
            <p className={styles.secureNotice}>Bezpieczna płatność SSL. Hemp Settlement gwarantuje najwyższą dyskrecję.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
