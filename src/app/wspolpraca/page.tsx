import styles from './page.module.css';

export default function Partnership() {
  return (
    <div className={`container section-gap`}>
      <div className={styles.intro}>
        <h1 className="headline-lg">Zostań Partnerem</h1>
        <p className={styles.editorial}>
          "Rynek potrzebuje świeżości... Hemp Settlement to pierwsza polska marka, która doskonale zrozumiała rynek i potrzeby koneserów."
        </p>
      </div>

      <div className={styles.valueProps}>
        <div className={styles.propCard}>
          <h3>Bletki All In One</h3>
          <p>Nowy standard w branży... Pełen komfort, minimalizm i wygoda na co dzień.</p>
        </div>
        <div className={styles.propCard}>
          <h3>Mieszanki ziołowe</h3>
          <p>100% naturalne, botaniczne kompozycje roślinne. Wake N Bake na dzień i Dream Catcher na noc.</p>
        </div>
        <div className={styles.propCard}>
          <h3>Maszyna vendingowa</h3>
          <p>Autonomiczny sklep, z dużym, dotykowym ekranem oraz wieloma funkcjonalnościami.</p>
        </div>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.formWrapper}>
          <h2 style={{ fontFamily: 'var(--font-headline)', marginBottom: '1rem' }}>Skontaktuj się z nami</h2>
          <p style={{ color: 'var(--color-sage)', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Wyślij wiadomość, aby porozmawiać o szczegółach współpracy B2B. 
            <strong style={{ color: 'var(--color-accent)' }}> Odpisujemy w 2h.</strong>
          </p>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label className="form-label">Imię i nazwisko</label>
              <input type="text" className="form-input" placeholder="Jan Kowalski" />
            </div>
            <div className={styles.inputGroup}>
              <label className="form-label">Firma</label>
              <input type="text" className="form-input" placeholder="Twoja Firma Sp. z o.o." />
            </div>
            <div className={styles.inputGroup}>
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="jan@example.com" />
            </div>
            <div className={styles.inputGroup}>
              <label className="form-label">Wiadomość</label>
              <textarea className="form-input" placeholder="Temat współpracy..." rows={3}></textarea>
            </div>
            <button type="button" className="btn-primary" style={{ marginTop: '1rem' }}>Wyślij zapytanie</button>
          </form>
        </div>
        <div className={styles.infoWrapper}>
          <h2 style={{ fontFamily: 'var(--font-headline)', marginBottom: '2rem' }}>Nasza baza</h2>
          <div className={styles.contactDetails}>
            <div>
              <span className={styles.label}>Email</span>
              <p>simon@hempsettlement.pl</p>
            </div>
            <div>
              <span className={styles.label}>Telefon</span>
              <p>+48 794 599 670</p>
            </div>
            <div>
              <span className={styles.label}>Adres</span>
              <p>plac Wiosny Ludów 2<br/>61-831 Poznań</p>
            </div>
          </div>
          <div className={styles.mapStub}>
            <div className={styles.mapMarker}></div>
            <p className={styles.mapText}>Stylizowana mapa Google (Dark Mode)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
