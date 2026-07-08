import type { Metadata } from "next";
import { Geist, Geist_Mono, League_Spartan } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ola",
  description: "Buenosdias",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leagueSpartan.className} antialiased  dark:bg-dm-dark-primary`}
      >
      {children}
      </body>
    </html>
  );
}
