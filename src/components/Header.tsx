import { BrandMark } from "./BrandMark";
import { MobileNavigation } from "./MobileNavigation";
import { navigation } from "@/data/site";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function Header() {
  return <header className="site-header"><div className="nav-shell">
    <Link href="/#inicio" aria-label="Chatre, ir al inicio"><BrandMark /></Link>
    <nav className="desktop-nav" aria-label="Navegación principal">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <a className="button button-small desktop-cta" href={siteConfig.bookingUrl}>Solicitar diagnóstico</a>
    <MobileNavigation />
  </div></header>;
}
