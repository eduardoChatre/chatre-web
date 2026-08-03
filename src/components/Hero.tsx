import { AutomationFlow } from "./AutomationFlow";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function Hero() {
  return <section id="inicio" className="hero"><div className="hero-grid container" id="contenido">
    <div className="hero-copy">
      <p className="eyebrow"><span /> Automatización + Inteligencia Artificial</p>
      <h1>Automatización digital <span>sin fronteras.</span></h1>
      <p className="hero-lede">Conectamos inteligencia artificial, agentes digitales y flujos automatizados para que tu negocio venda, atienda y tome mejores decisiones de manera continua.</p>
      <div className="actions"><a className="button button-primary" href={siteConfig.bookingUrl}>Solicitar diagnóstico <span aria-hidden="true">↗</span></a><Link className="button button-secondary" href="/#soluciones">Explorar soluciones <span aria-hidden="true">↓</span></Link></div>
      <p className="hero-proof"><span aria-hidden="true">✓</span> Diseñado alrededor de tu operación, no de una herramienta.</p>
    </div>
    <AutomationFlow />
  </div></section>;
}
