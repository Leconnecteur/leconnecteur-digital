import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { defaultMetadata } from "./metadata";

// Optimisation des polices avec font-display: swap
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Le Connecteur Digital - Création de sites web et marketing digital',
  description: 'Le Connecteur Digital vous accompagne dans la création de votre site web et votre stratégie marketing digitale. Basé à Bayonne, nous intervenons dans tout le Pays Basque.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen">
        <MainLayout>
          {children}
        </MainLayout>
        {/* Structured data for SEO */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Le Connecteur Digital",
              "url": "https://leconnecteurdigital.fr",
              "logo": "https://leconnecteurdigital.fr/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61566337440874&locale=fr_FR",
                "https://www.instagram.com/leconnecteurdigital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                "https://www.linkedin.com/in/geremy-lourenco-350945b2"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33600000000",
                "contactType": "customer service",
                "availableLanguage": "French"
              }
            })
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
