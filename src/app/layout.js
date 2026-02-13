import { Geist, Geist_Mono } from "next/font/google";
import { Sansita } from "next/font/google";
import "./globals.css";
import CombinedHeader from "../components/CombinedHeader";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sansita = Sansita({
  variable: "--font-sansita",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "FoodDelight - Delicious Food Restaurant",
  description: "Experience the finest cuisine at FoodDelight restaurant. Fresh ingredients, expert chefs, and unforgettable dining.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sansita.variable} antialiased`}
      >
        <CartProvider>
          <CombinedHeader />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
