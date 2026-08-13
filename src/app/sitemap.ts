import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
const routes = ["", "/aviso-de-privacidad", "/terminos", "/eliminacion-de-datos", "/solicitudes-de-autoridades"] as const;
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route,index) => ({ url:`${siteConfig.domain}${route || "/"}`, lastModified: route === "/solicitudes-de-autoridades" ? "2026-08-12" : siteConfig.lastLegalUpdate, changeFrequency:index === 0 ? "monthly" : "yearly", priority:index === 0 ? 1 : .4 })); }
