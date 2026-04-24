import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.smokeArea}>
          <div className={styles.smokeLayer}></div>
          <div className={styles.smokeLayer2}></div>
        </div>
        <Image src="images/tlohs.png" alt="Hemp Settlement Elite" fill style={{ objectFit: 'cover', objectPosition: 'center bottom' }} priority className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroKicker}>HEMP SETTLEMENT</div>
          <h1 className="headline-xl" style={{ fontFamily: 'var(--font-calligraphy)', fontWeight: 400 }}>
            Wszystko czego potrzebujesz.<br/>Nic czego nie potrzebujesz.
          </h1>
          <p className={styles.heroSub}>Botaniczny prestiż w codziennej postaci.</p>
          <Link href="/sklep" className="btn-primary" style={{ marginTop: '2rem' }}>Odkryj kolekcję</Link>
        </div>
      </section>

      <section className={`container section-gap`}>
        <div className={styles.sectionHeader}>
          <h2 className="headline-lg">
            Dołącz do <span className={styles.goldText}>Hemp Settlement</span>
          </h2>
          <p>Ekskluzywna jakość w nowym, wygodnym wymiarze.</p>
        </div>
        
        <div className={styles.productGrid}>
          <ProductCard 
            name="WAKE N BAKE" 
            category="Mieszanka ziołowa" 
            price="18,99 zł" 
            description="Profil na dzień, botaniczna świeżość. Energia płynąca prosto z natury."
            imageSrc="images/daytimeMieszanka.png" 
          />
          <ProductCard 
            name="DREAM CATCHER" 
            category="Mieszanka ziołowa" 
            price="18,99 zł" 
            description="Profil na noc, wyciszenie konesera. Twój moment botanicznego relaksu."
            imageSrc="images/nighttimeMieszanka.png" 
          />
          <ProductCard 
            name="Bletki All In One" 
            category="Akcesoria" 
            price="11,00 zł" 
            description="Bibułki, filtry, tacka, młynek i ubijak. Nowy standard w branży."
            imageSrc="images/bletki.png" 
          />
        </div>
      </section>

      <section className={styles.vending}>
        <div className={`container ${styles.vendingGrid}`}>
          <div className={styles.vendingContent}>
            <span className={styles.tag}>Innowacja</span>
            <h2 className="headline-lg">Autonomia <br/>Konesera.</h2>
            <p className={styles.editorial}>
              "Rynek potrzebuje świeżości... Hemp Settlement to pierwsza polska marka, 
              która doskonale zrozumiała rynek i potrzeby."
            </p>
            <p>
              Nowoczesna maszyna vendingowa. Autonomiczny punkt sprzedaży z dużym, dotykowym ekranem oraz wieloma funkcjonalnościami. Zapewnia wygodę i dostęp o każdej porze.
            </p>
            <Link href="/wspolpraca" className="btn-secondary" style={{ marginTop: '2rem' }}>Zostań Partnerem</Link>
          </div>
          <div className={styles.vendingImage}>
            <Image src="images/automat.png" alt="Hemp Settlement Vending Machine" width={400} height={600} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>
    </>
  );
}
