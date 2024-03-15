import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fútbol Colombiano 2024",
  description: "Información de los equipos de la primera división del fútbol colombiano en 2024",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
