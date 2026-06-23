import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({
weight: ["700"],
style: ["normal"],
subsets: ["latin"],
display: "swap",
variable: "--font-inter-bold",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
