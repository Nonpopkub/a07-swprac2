import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "../components/TopMenu";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "where every event finds its venue",
  description: "สถานที่จัดเลี้ยงที่ดีที่สุด พร้อมบริการระดับมืออาชีพ ที่จะทำให้งานของคุณสมบูรณ์แบบ",
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
