import styles from './page.module.css';

export default function AboutUs() {
  return (
    <div className={`container section-gap`}>
      <div className={styles.hero}>
        <h1 className="headline-lg">Dziedzictwo i Wizja</h1>
        <p className={styles.subtitle}>Poznaj historię Hemp Settlement.</p>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.textSection}>
          <h2 style={{ fontFamily: 'var(--font-headline)', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>Nasza Historia</h2>
          <p>
            Hemp Settlement narodziło się z pasji do botaniki i szacunku do natury. 
            Zauważyliśmy, że rynek potrzebuje nowej jakości – produktów, które nie tylko 
            spełniają oczekiwania, ale wyznaczają nowe standardy. Od pierwszych mieszanek 
            ziołowych po innowacyjne automaty vendingowe, nasza droga to nieustanne dążenie do doskonałości.
          </p>
        </div>
        <div className={styles.textSection}>
          <h2 style={{ fontFamily: 'var(--font-headline)', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>Misja i Wizja</h2>
          <p>
            <strong>"Świeżość i wygoda koneserów."</strong><br/><br/>
            Wierzymy, że luksus tkwi w dostępności i najwyższej jakości składników. 
            Naszym celem jest dostarczanie botanicznego prestiżu w codziennej, wysoce użytecznej formie, łącząc rzemiosło z nowoczesną technologią sprzedaży autonomicznej.
          </p>
        </div>
      </div>

      <div className={styles.valuesSection}>
        <h2 style={{ fontFamily: 'var(--font-headline)', textAlign: 'center', marginBottom: '3rem' }}>Nasze Wartości</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Minimalizm</h3>
            <p>Wszystko czego potrzebujesz. Nic czego nie potrzebujesz. Skupienie na esencji.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Jakość</h3>
            <p>100% naturalne składniki, precyzyjne kompozycje botaniczne i elegancki design.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Autonomia</h3>
            <p>Innowacja poprzez nowoczesne maszyny vendingowe. Wybór należy do Ciebie – 24/7.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
