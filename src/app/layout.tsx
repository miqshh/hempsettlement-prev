import type { Metadata } from "next";
import { Noto_Serif, Manrope, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const notoSerif = Noto_Serif({ 
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-headline",
});

const manrope = Manrope({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

const calligraphic = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-calligraphy",
});

export const metadata: Metadata = {
  title: "Hemp Settlement Elite",
  description: "Wszystko czego potrzebujesz. Nic czego nie potrzebujesz. Luksus dostępny.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${notoSerif.variable} ${manrope.variable} ${calligraphic.variable} ${manrope.className}`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
