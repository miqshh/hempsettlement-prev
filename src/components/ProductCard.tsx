"use client";
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

interface ProductProps {
  name: string;
  category: string;
  price: string;
  description: string;
  imageSrc: string;
}

export default function ProductCard({ name, category, price, description, imageSrc }: ProductProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: name, name, price, imageSrc });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={name} fill style={{ objectFit: 'contain', padding: '1rem' }} />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <button className={styles.quickAdd} onClick={handleAddToCart}>Dodaj</button>
        </div>
      </div>
    </div>
  );
}
