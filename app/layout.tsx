import Footer from "@/composants/layout/Footer";
import Header from "@/composants/layout/Header";
import ScrollTop from "@/composants/layout/ScrollTop";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { client } from "@/utils/prismicio";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const menu= await client.getSingle("menu");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={`flex flex-col min-h-dvh ${inter.className}`}>
        <Header menu={menu} />
        {children}
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
