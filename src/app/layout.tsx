import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Chatre | Automatización e inteligencia artificial para empresas",
  description:
    "Integramos inteligencia artificial, agentes digitales y automatizaciones para conectar ventas, atención, datos y procesos empresariales.",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Chatre",
    title: "Chatre | Automatización e inteligencia artificial para empresas",
    description:
      "Automatización digital sin fronteras. Sistemas conectados para vender, atender y decidir mejor.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Chatre — Automatización digital sin fronteras" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatre | Automatización e inteligencia artificial",
    description: "Automatización digital sin fronteras para empresas.",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg", apple: "/apple-icon" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chatre",
  url: siteConfig.url,
  email: siteConfig.contactEmail,
  description: "Automatización digital e inteligencia artificial para empresas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
