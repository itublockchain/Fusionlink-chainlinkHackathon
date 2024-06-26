import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./components/providers";
import Provider from "./api/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fusionlink",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Provider>{children}</Provider>
        </Providers>
      </body>
    </html>
  );
}
