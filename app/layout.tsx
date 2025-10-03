// style
import "./globals.css";
// fonts

import { Vazirmatn, Poppins } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vazirmatn",
  display: "swap", // Avoids blank text while fonts load
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // Avoids blank text while fonts load
});

// metadata
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "micodex | Home",
  description: "micodex Portfolio Website",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript"],
  authors: [{ name: "Milad" }],
  creator: "Milad",
  publisher: "Milad",
};

// components
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import { ThemeProvider } from "@/context/ThemeContext";
import AosProvider from "@/components/common/AosProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.className} ${poppins.variable} antialiased`}
      >
        <AosProvider>
          <ThemeProvider>
            <header>
              <Navbar />
            </header>
          </ThemeProvider>

          <main>{children}</main>

          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
