import { useCases } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
export function UseCases() { return <section id="casos-de-uso" className="section"><div className="container"><SectionHeading eyebrow="Casos de uso" title="Una capa inteligente para negocios que quieren avanzar."/><div className="use-grid">{useCases.map(([title,text], index) => <article key={title}><div><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3></div><p>{text}</p></article>)}</div></div></section>; }
