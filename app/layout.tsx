// fonts
import { Geist, Geist_Mono, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

// style
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
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
