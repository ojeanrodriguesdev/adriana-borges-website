import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/seo/StructuredData";
import InternalLinks from "../components/seo/InternalLinks";
import WebVitals, { CriticalResourcePreloader } from "../components/performance/WebVitals";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configuração da URL base para metadata
let baseUrl = "http://localhost:3000"; // fallback padrão

if (process.env.NEXT_PUBLIC_SITE_URL) {
  baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
} else if (process.env.VERCEL_URL) {
  baseUrl = `https://${process.env.VERCEL_URL}`;
}

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Despigmentação a laser em Santos e Praia Grande | Adriana Borges",
    template: "%s | Adriana Borges - Despigmentação a Laser"
  },
  description: "Remoção segura e eficaz de tatuagens e micropigmentação com laser Q-Switched Nd:YAG. Veja depoimentos e resultados reais. Agende sua avaliação gratuita em Santos e Praia Grande.",
  keywords: [
    "despigmentação a laser",
    "remoção de tatuagem",
    "remoção de micropigmentação", 
    "laser Q-Switched Nd:YAG",
    "Santos",
    "Praia Grande",
    "Adriana Borges",
    "depoimentos",
    "resultados",
    "antes e depois",
    "clínica estética",
    "tratamento a laser",
    "remoção de pigmento",
    "despigmentação facial",
    "despigmentação corporal"
  ],
  authors: [{ name: "Adriana Borges" }],
  creator: "Adriana Borges",
  publisher: "Adriana Borges",
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
  openGraph: {
    title: "Despigmentação a laser em Santos e Praia Grande | Adriana Borges",
    description: "Remoção segura e eficaz de tatuagens e micropigmentação com laser Q-Switched Nd:YAG. Veja depoimentos e resultados reais. Agende sua avaliação gratuita.",
    url: "https://adrianaborges.com.br",
    siteName: "Adriana Borges - Despigmentação a Laser",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adriana Borges - Despigmentação a Laser em Santos e Praia Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Despigmentação a laser em Santos e Praia Grande | Adriana Borges",
    description: "Remoção segura e eficaz de tatuagens e micropigmentação com laser Q-Switched Nd:YAG. Veja depoimentos e resultados reais.",
    images: ["/twitter-image.jpg"],
    creator: "@adrianaborges",
  },
  alternates: {
    canonical: "https://adrianaborges.com.br",
  },
  category: "health",
  classification: "Medical Aesthetics",
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Santos, Praia Grande",
    "geo.position": "-23.9608;-46.3336",
    "ICBM": "-23.9608, -46.3336",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://instagram.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <WebVitals />
        <CriticalResourcePreloader />
        <InternalLinks />
        {children}
      </body>
    </html>
  );
}
