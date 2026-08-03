import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules:{ userAgent:"*", allow:"/" }, sitemap:"https://chatre.io/sitemap.xml", host:"https://chatre.io" }; }
