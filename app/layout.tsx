import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import Provider from "./components/NextUI/Provider";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import * as React from "react";

export const metadata = {
  title: "EV Price Tracker - Follow Daily MSRP Changes",
  description: "INSERT",
  icons: {
    icon: "/Favicon.png",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <body className={`${inter.className}`}>
        <NavBar />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
      </body>
    </Provider>
  );
}
// How to make footer part of main and main
