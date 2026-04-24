import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Wymagane dla GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages nie wspiera natywnej optymalizacji obrazów Next.js
  },
  /* 
     Jeśli Twoja strona będzie pod adresem: uzytkownik.github.io/nazwa-repo/
     to odkomentuj poniższą linię i wpisz nazwę swojego repozytorium:
  */
  // basePath: '/nazwa-repozytorium',
};

export default nextConfig;
