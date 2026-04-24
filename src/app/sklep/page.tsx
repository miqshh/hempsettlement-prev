import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Shop() {
  return (
    <div className={`container section-gap`}>
      <header className={styles.header}>
        <h1 className="headline-lg">Sklep</h1>
        <p className={styles.subtitle}>Ekskluzywna jakość na co dzień. Poznaj naszą pełną ofertę.</p>
      </header>

      <div className={styles.productGrid}>
        <ProductCard 
          name="WAKE N BAKE" 
          category="Mieszanka ziołowa" 
          price="18,99 zł" 
          description="Profil na dzień, botaniczna świeżość. 100% naturalna kompozycja."
          imageSrc="/images/daytimeMieszanka.png" 
        />
        <ProductCard 
          name="DREAM CATCHER" 
          category="Mieszanka ziołowa" 
          price="18,99 zł" 
          description="Profil na noc, wyciszenie konesera. Idealne na zakończenie dnia."
          imageSrc="/images/nighttimeMieszanka.png" 
        />
        <ProductCard 
          name="Bletki All In One" 
          category="Akcesoria" 
          price="11,00 zł" 
          description="Bibułki, filtry, tacka, młynek i ubijak ukryte w eleganckim opakowaniu."
          imageSrc="/images/bletki.png" 
        />
      </div>
    </div>
  );
}
