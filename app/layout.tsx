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
  // global metadata
  title: "خانه | micodex",
  description: "micodex Portfolio Website",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript"],
  authors: [{ name: "Milad" }],
  creator: "Milad",
  publisher: "Milad",

  // global OG tags
  metadataBase: new URL("https://micodex-portfolio.vercel.app"), // to resolve social images path

  openGraph: {
    title: "micodex",
    description:
      "پورتفولیوی micodex یک وب‌سایت پورتفولیو مدرن ساخته‌شده با Next.js 15 و React 19",
    url: "https://micodex-portfolio.vercel.app",
    images: [
      {
        url: "/projects/project-1.jpg",
        width: 1024,
        height: 768,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "micodex",
    description:
      "پورتفولیوی یک وب‌سایت پورتفولیو مدرن ساخته‌شده با Next.js 15 و React 19",
    images: ["/projects/project-1.jpg"],
  },
};

// components
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import { ThemeProvider } from "@/context/ThemeContext";

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
        <ThemeProvider>
          <header>
            <Navbar />
          </header>
        </ThemeProvider>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
