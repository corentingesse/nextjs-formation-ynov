import Footer from "@/composants/layout/Footer";
import Header from "@/composants/layout/Header";
import ScrollTop from "@/composants/layout/ScrollTop";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Website Reviews",
  description: "Découvrez et partagez vos avis sur les sites web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`flex flex-col min-h-dvh ${inter.className}`}>
        <Header />
        {children}
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
