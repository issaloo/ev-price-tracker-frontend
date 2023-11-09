import * as React from "react";
import { Inter } from "next/font/google";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import "./globals.css";

export const metadata = {
  title: "EV Price Tracker | Stay Informed About Electric Vehicle Costs",
  description:
    "Get daily updates on electric vehicle starting prices from known brands such as Tesla, Rivian, and Lucid. Compare costs, find the best deals, and make informed choices with our real-time EV price tracker. Stay ahead in the electric vehicle market with accurate pricing data.",
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
    <html lang="en">
      <body
        className={`h-screen flex flex-col justify-between ${inter.className}`}
      >
        <NavBar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
