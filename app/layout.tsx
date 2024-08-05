import type { Metadata } from "next";
import "./globals.css";
import React from "react";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel with me",
  description: "Travel UI/UX app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
