import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zenithera Property Investments | Suffolk & Norfolk',
  description: 'Commercial conversions, serviced accommodation, and strategic land planning. Professional property investment strategies delivering reliable returns across East Anglia.',
  keywords: ['property investment', 'commercial deals', 'land planning', 'Suffolk', 'East Anglia'],
  authors: [{ name: 'Zenithera Property Investments' }],
  icons: {
    icon: 'https://res.cloudinary.com/dcm0m5nrt/image/upload/v1758661760/Zenithera-favicon_exhnpo.jpg',
    shortcut: 'https://res.cloudinary.com/dcm0m5nrt/image/upload/v1758661760/Zenithera-favicon_exhnpo.jpg',
    apple: 'https://res.cloudinary.com/dcm0m5nrt/image/upload/v1758661760/Zenithera-favicon_exhnpo.jpg',
  },
  openGraph: {
    title: 'Zenithera Property Investments | Suffolk & Norfolk',
    description: 'Commercial conversions, serviced accommodation, and strategic land planning. Professional property investment strategies delivering reliable returns across East Anglia.',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://res.cloudinary.com/dcm0m5nrt/image/upload/v1758706192/Zenithera-Social-Opengraph-image_nyzcfs.jpg',
        width: 1200,
        height: 630,
        alt: 'Zenithera Property Investments - Commercial Deals & Land Planning',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
