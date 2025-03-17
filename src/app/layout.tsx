import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "../components/TopMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venue Booking - Find Your Perfect Event Space",
  description: "Book exceptional venues for any occasion - weddings, corporate events, private parties and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu />
        <main className="min-h-[calc(100vh-400px)]">
          {children}
        </main>
       
      </body>
    </html>
  );
}