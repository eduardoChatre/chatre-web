import { benefits } from "@/data/site";
export function Benefits() { return <section className="benefits" aria-label="Beneficios"><div className="container benefits-grid">{benefits.map(([number,title,text]) => <article key={title}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>; }
