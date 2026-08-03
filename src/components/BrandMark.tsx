export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand" aria-label="Chatre">
      <svg className="brand-mark" viewBox="0 0 44 44" role="img" aria-hidden="true">
        <path d="M32 10.5a15 15 0 1 0 0 23" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M31.5 10.5 36 6M31.5 33.5 36 38M13 22H6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="6" r="2.5" fill="currentColor" /><circle cx="36" cy="38" r="2.5" fill="currentColor" /><circle cx="6" cy="22" r="2.5" fill="currentColor" />
      </svg>
      {!compact && <span className="brand-name">chatre<span>.</span></span>}
    </span>
  );
}
