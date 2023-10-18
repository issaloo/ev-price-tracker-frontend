"use client";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <body>
        <NavBar />
        {children}
      </body>
    </NextUIProvider>
  );
}
