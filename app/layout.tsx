import type { Metadata } from "next";
import { Inter, Pacifico, Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const pacifico = Pacifico({
  weight: '400',
  variable: "--font-pacifico",
  subsets: ["latin"],
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Happy Valentine's Day ❤️ | A Love Letter Just For You",
  description: "A magical, romantic Valentine's Day experience filled with love, sweet animations, and heartfelt messages. Celebrate love with this beautiful interactive website.",
  keywords: ["Valentine's Day", "Love", "Romance", "Romantic", "Hearts", "Valentine", "Love Letter"],
  authors: [{ name: "Made with Love" }],
  openGraph: {
    title: "Happy Valentine's Day ❤️",
    description: "A magical romantic experience created just for you",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff4d6d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>❤️</text></svg>" />
      </head>
      <body
        className={`${inter.variable} ${pacifico.variable} ${greatVibes.variable} ${cormorant.variable} antialiased font-romantic`}
      >
        {children}
      </body>
    </html>
  );
}
