import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { siteConfig } from "@/lib/site-config";

export function LegalPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <><header className="legal-header"><Link href="/" aria-label="Volver al inicio de Chatre"><BrandMark /></Link><Link href="/">Volver al inicio</Link></header><main id="contenido" className="legal-main"><p className="eyebrow"><span/>{eyebrow}</p><h1>{title}</h1><div className="legal-notice">Este documento es una versión informativa provisional. El contenido legal definitivo está pendiente de revisión profesional.</div><div className="legal-copy">{children}<h2>Contacto</h2><p>Para consultas relacionadas con este documento, escribe a <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</p></div></main></>;
}
