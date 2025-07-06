import type { Metadata } from "next";
import { Inter, Playfair_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/ui/particles";
import { Providers } from "./providers";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: "Bookr - Transform Your Productivity",
  description: "Experience the future of booking and scheduling with Bookr. Streamline your appointments and maximize efficiency like never before.",
  icons: {
    icon: [
      {
        url: "/images/bookr-logo.png",
        type: "image/png",
        sizes: "32x32"
      },
      {
        url: "/images/bookr-logo.png",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/images/bookr-logo.png",
        type: "image/png",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/images/bookr-logo.png" }],
    other: [
      {
        rel: "icon",
        url: "/images/bookr-logo.png",
      },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={instrumentSans.className} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/bookr-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/bookr-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/bookr-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} relative min-h-screen overflow-x-hidden`}>
        <Providers>
          <Particles
            className="fixed inset-0 -z-10 w-full h-full"
            quantity={220}
            staticity={25}
            color="#8b5cf6"
            ease={15}
            size={1}
            vx={0.3}
            vy={0.3}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
