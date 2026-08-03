"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/site";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); return; }
      if (event.key !== "Tab" || !panelRef.current) return;
      const links = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a, button"));
      const first = links[0];
      const last = links.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", handleKeyboard);
    return () => document.removeEventListener("keydown", handleKeyboard);
  }, [open]);

  return (
    <div className="mobile-nav">
      <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((value) => !value)}>
        <span /><span />
      </button>
      {open && (
        <div ref={panelRef} id="mobile-menu" className="mobile-panel">
          <nav aria-label="Navegación móvil">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          </nav>
          <a className="button button-primary" href={siteConfig.bookingUrl}>Solicitar diagnóstico</a>
        </div>
      )}
    </div>
  );
}
