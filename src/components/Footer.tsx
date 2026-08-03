import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { navigation } from "@/data/site";
import { siteConfig } from "@/lib/site-config";
export function Footer() { return <footer><div className="container footer-grid"><div className="footer-brand"><Link href="/#inicio"><BrandMark /></Link><p>Automatización digital<br/>sin fronteras.</p></div><div><h2>Navegación</h2>{navigation.slice(0,5).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div><h2>Legal</h2><Link href="/aviso-de-privacidad">Aviso de privacidad</Link><Link href="/terminos">Términos</Link></div><div><h2>Contacto</h2><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a><a href={siteConfig.url}>chatre.io</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Chatre. Todos los derechos reservados.</span><span>Hecho para avanzar.</span></div></footer>; }
