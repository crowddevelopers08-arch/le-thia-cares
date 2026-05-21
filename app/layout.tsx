import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Le Thia Cares",
  description: "Le Thia Cares landing page replica",
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/djzexkvyv/image/upload/v1779346399/lefav_pijz4a.png', type: 'image/png' },
    ],
    apple: 'https://res.cloudinary.com/djzexkvyv/image/upload/v1779346399/lefav_pijz4a.png',
    shortcut: 'https://res.cloudinary.com/djzexkvyv/image/upload/v1779346399/lefav_pijz4a.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} font-body selection:bg-[#624452] selection:text-[#dbb3c4]`}
      >
        {children}
      </body>
    </html>
  );
}
