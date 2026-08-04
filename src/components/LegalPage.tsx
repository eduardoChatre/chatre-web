import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { siteConfig } from "@/lib/site-config";
import { Footer } from "./Footer";

export function LegalPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <><header className="legal-header"><Link href="/" aria-label={`Volver al inicio de ${siteConfig.companyName}`}><BrandMark /></Link><Link href="/">Volver al inicio</Link></header><main id="contenido" className="legal-main"><p className="eyebrow"><span/>{eyebrow}</p><h1>{title}</h1><div className="legal-copy">{children}</div></main><Footer /></>;
}
