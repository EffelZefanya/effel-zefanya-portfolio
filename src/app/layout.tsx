import type { Metadata } from "next";
import "./globals.css"
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Effel Zefanya Portfolio",
  description: "Effel's personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}