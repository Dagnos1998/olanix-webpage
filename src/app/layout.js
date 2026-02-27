import "./globals.css";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Exo_2, Inter } from "next/font/google";

const exo = Exo_2({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-exo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Olanix",
  description: "Landing de servicios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${exo.variable} ${inter.variable} bg-white`}>
      <body className="bg-white text-gray-900">
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}