"use client";

import { useEffect, useState } from "react";

const allowed = new Set(["ivory", "paper", "forest", "ink", "mint", "night"]);

export function ScrollAtmosphere() {
  const [theme, setTheme] = useState("ivory");

  useEffect(() => {
    let raf = 0;

    const commitTheme = (next: string) => {
      if (!allowed.has(next)) return;
      setTheme(current => current === next ? current : next);
      document.documentElement.dataset.atmosphere = next;
    };

    const update = () => {
      raf = 0;

      const x = Math.min(window.innerWidth - 1, Math.max(1, window.innerWidth * 0.5));
      const y = Math.min(window.innerHeight - 1, Math.max(1, window.innerHeight * 0.5));
      const hit = document.elementFromPoint(x, y) as HTMLElement | null;
      const direct = hit?.closest<HTMLElement>("[data-atmosphere]");

      if (direct?.dataset.atmosphere) {
        commitTheme(direct.dataset.atmosphere);
        return;
      }

      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-atmosphere]"));
      let active: HTMLElement | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const center = rect.top + rect.height * 0.5;
        const distance = Math.abs(center - y);
        if (distance < bestDistance) {
          bestDistance = distance;
          active = section;
        }
      }

      commitTheme(active?.dataset.atmosphere || "ivory");
    };

    const requestUpdate = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      delete document.documentElement.dataset.atmosphere;
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className={`scrollAtmosphere atmosphere-${theme}`} data-theme={theme} aria-hidden="true">
      <div className="atmosphereBase" />
      <div className="atmosphereGlow atmosphereGlowA" />
      <div className="atmosphereGlow atmosphereGlowB" />
      <div className="atmosphereGrain" />
    </div>
  );
}
