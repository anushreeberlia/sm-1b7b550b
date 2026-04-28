import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export const metadata: Metadata = {
  title: {
    default: 'Sevoke Motors Siliguri | Authorized Maruti Suzuki Dealership',
    template: '%s | Sevoke Motors Siliguri'
  },
  description: 'Leading Maruti Suzuki dealership in Siliguri offering new cars (Arena & Nexa), commercial vehicles, pre-owned cars, financing, and expert service. Visit us on Sevoke Road for the best deals.',
  keywords: 'car dealership Siliguri, Maruti Suzuki Siliguri, new cars Siliguri, commercial vehicles, pre-owned cars, car financing, Sevoke Motors, Arena cars, Nexa cars, True Value',
  authors: [{ name: 'Sevoke Motors' }],
  openGraph: {
    title: 'Sevoke Motors Siliguri | Authorized Maruti Suzuki Dealership',
    description: 'Leading Maruti Suzuki dealership in Siliguri offering new cars, commercial vehicles, pre-owned cars, and expert service.',
    url: 'https://sevokemotors.com',
    siteName: 'Sevoke Motors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Sevoke Motors Siliguri Showroom'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sevoke Motors Siliguri | Authorized Maruti Suzuki Dealership',
    description: 'Leading Maruti Suzuki dealership in Siliguri offering new cars, commercial vehicles, and expert service.',
    images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Sevoke Motors",
              "description": "Authorized Maruti Suzuki dealership in Siliguri offering new cars, commercial vehicles, pre-owned cars, financing, and service",
              "url": "https://sevokemotors.com",
              "telephone": "+91-353-2123456",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sevoke Road",
                "addressLocality": "Siliguri",
                "addressRegion": "West Bengal",
                "postalCode": "734001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.7271,
                "longitude": 88.3953
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Maruti Suzuki New Cars"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Commercial Vehicles"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Pre-owned Cars"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}