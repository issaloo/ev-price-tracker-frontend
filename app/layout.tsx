import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import Provider from "./components/NextUI/Provider";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import * as React from "react";

export const metadata = {
  title: "INSERT",
  description: "INSERT",
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
        {children}
        <Footer />
      </body>
    </Provider>
  );
}
