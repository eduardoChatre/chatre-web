import { processSteps } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
export function Process() { return <section id="como-funciona" className="section section-alt"><div className="container process-layout"><SectionHeading eyebrow="Cómo funciona" title="De un proceso disperso a un sistema que avanza solo." description="Una implementación clara, gradual y enfocada en resultados medibles."/><ol className="process-list">{processSteps.map(([number,title,text]) => <li key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>; }
