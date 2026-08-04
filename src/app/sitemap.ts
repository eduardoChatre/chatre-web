import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
const routes = ["", "/aviso-de-privacidad", "/terminos", "/eliminacion-de-datos"] as const;
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route,index) => ({ url:`${siteConfig.domain}${route || "/"}`, lastModified: siteConfig.lastLegalUpdate, changeFrequency:index === 0 ? "monthly" : "yearly", priority:index === 0 ? 1 : .4 })); }
