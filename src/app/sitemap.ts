import type { MetadataRoute } from "next";
const routes = ["", "/aviso-de-privacidad", "/terminos"] as const;
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route,index) => ({ url:`https://chatre.io${route}`, changeFrequency:index === 0 ? "monthly" : "yearly", priority:index === 0 ? 1 : .4 })); }
