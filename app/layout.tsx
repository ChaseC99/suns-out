import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TabBar from "./tab-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volleybrawl",
  description: "Let's ball",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <TabBar />
      </body>
    </html>
  );
}
