import * as React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

import { ThemeProvider } from "./components/DarkMode/ThemeProvider";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3409882131833467"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-736ZH3TYLP" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-736ZH3TYLP');
        `}
      </Script>
      <body
        className={`h-full flex flex-col justify-between ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="mb-auto">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
