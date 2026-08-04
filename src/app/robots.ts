import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export default function robots(): MetadataRoute.Robots { return { rules:{ userAgent:"*", allow:["/", "/aviso-de-privacidad", "/terminos", "/eliminacion-de-datos"] }, sitemap:`${siteConfig.domain}/sitemap.xml`, host:siteConfig.domain }; }
