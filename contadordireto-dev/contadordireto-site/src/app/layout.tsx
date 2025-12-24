import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home - Contador Direto",
    template: "%s | Contador Direto",
  },
  description: "Bem-vindo ao Contador Direto - Seu Parceiro de Confiança em Contabilidade e Consultoria Financeira!",
  keywords: [
    "Contabilidade Digital",
    "Contador para Devs",
    "Contador Direto",
    "Abertura de Empresa",
    "Contabilidade para TI",
    "PJ TI",
    "Contabilidade Online",
    "Consultoria Financeira",
    "Profissionais de TI",
    "Contador para Tecnologia"
  ],
  metadataBase: new URL("https://contadordireto.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://contadordireto.com.br/",
    siteName: "Contador Direto",
    title: "Home - Contador Direto",
    description: "Bem-vindo ao Contador Direto - Seu Parceiro de Confiança em Contabilidade e Consultoria Financeira!",
    images: [
      {
        url: "https://contadordireto.com.br/wp-content/uploads/2024/11/3500-devs-1.png",
        width: 500,
        height: 500,
        alt: "Contador Direto Logo",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Contador Direto",
    description: "Bem-vindo ao Contador Direto - Seu Parceiro de Confiança em Contabilidade e Consultoria Financeira!",
    images: [
      "https://contadordireto.com.br/wp-content/uploads/2024/11/3500-devs-1.png"
    ]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "192x192" },
    ],
    apple: "/favicon.ico"
  },
  alternates: {
    canonical: "https://contadordireto.com.br/"
  },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
    maxVideoPreview: -1
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#171717" />
        <meta name="author" content="Contador Direto" />
        <meta name="copyright" content="Contador Direto" />
        <meta name="google-site-verification" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
