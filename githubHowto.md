# 🚀 Hemp Settlement - Instrukcja Deploymentu na GitHub Pages

Ten projekt jest skonfigurowany jako statyczna aplikacja Next.js (SSG), która automatycznie publikuje się na GitHub Pages za pomocą **GitHub Actions**.

## 🛠 Konfiguracja Projektu

Najważniejsze ustawienia znajdują się w `next.config.js`:
- `output: 'export'`: Wymusza generowanie statycznych plików HTML (folder `/out`).
- `basePath: '/hempsettlement-prev'`: Dodaje nazwę repozytorium do wszystkich ścieżek Next.js.
- `images: { unoptimized: true }`: Konieczne, ponieważ GitHub Pages nie posiada serwera do optymalizacji zdjęć "w locie".

---

## 🖼 Obsługa Obrazków (Złota Zasada)

To był kluczowy punkt podczas konfiguracji. Aby obrazki działały zarówno na stronie głównej, jak i podstronach (np. `/sklep`), musisz używać **bezwzględnych ścieżek z prefiksem repozytorium**.

**Poprawny format ścieżki:**
```tsx
<Image src="/hempsettlement-prev/images/twoje-zdjecie.png" ... />
```

❌ **Nie używaj:**
- `src="/images/..."` (Zadziała tylko lokalnie, na GitHubie szukałoby w domenie głównej).
- `src="images/..."` (Zadziała tylko na stronie głównej, na podstronach się popsuje).

---

## 🏗 Proces Pushowania Zmian

Gdy wprowadzisz poprawki w kodzie lokalnie, wykonaj standardową procedurę Git:

1. **Dodaj zmiany:**
   ```bash
   git add .
   ```

2. **Stwórz commit:**
   ```bash
   git commit -m "Opis zmian (np. poprawka kolorów w hero)"
   ```

3. **Wyślij na serwer:**
   ```bash
   git push
   ```

---

## 🛰 Co dzieje się po "pushu"?

1. **GitHub Actions**: W zakładce **Actions** w Twoim repozytorium zobaczysz uruchomiony proces "Deploy Next.js site to Pages".
2. **Budowanie**: Serwer GitHub zainstaluje biblioteki, zbuduje projekt i wygeneruje folder `out`.
3. **Publikacja**: Po ok. 1-2 minutach zmiany będą widoczne pod adresem:
   `https://miqshh.github.io/hempsettlement-prev/`

---

## 💡 Dobre Praktyki & Rozwiązywanie Problemów

- **Błędy Builda**: Jeśli Actions zaświeci się na czerwono, kliknij w błąd i rozwiń sekcję `Build with Next.js`. Najczęściej powodem są błędy w TypeScript lub brakujące importy.
- **Niedziałające obrazki**: Zawsze sprawdzaj w konsoli przeglądarki (F12 -> Network), czy ścieżka do obrazka zawiera `/hempsettlement-prev/`.
- **Cache**: Jeśli nie widzisz zmian od razu, spróbuj "twardego" odświeżenia strony: `Cmd + Shift + R` (Mac) lub `Ctrl + F5` (Windows).

---

*Opracowano dla Hemp Settlement Elite 🌿*
