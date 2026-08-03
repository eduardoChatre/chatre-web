export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span /> {eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
