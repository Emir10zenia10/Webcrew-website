"use client";

import { useEffect, useState } from "react";

const allowed = new Set(["ivory", "paper", "forest", "ink", "mint", "night"]);

export function ScrollAtmosphere() {
  const [theme, setTheme] = useState("ivory");

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-atmosphere]"));
      if (!sections.length) return;

      const focusY = window.innerHeight * 0.52;
      let closest = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visible = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!visible) continue;

        const sectionFocus = Math.min(Math.max(focusY, rect.top), rect.bottom);
        const distance = Math.abs(sectionFocus - focusY);

        if (distance < closestDistance) {
          closest = section;
          closestDistance = distance;
        }
      }

      const next = closest.dataset.atmosphere || "ivory";
      if (allowed.has(next)) setTheme(next);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={`scrollAtmosphere atmosphere-${theme}`} aria-hidden="true">
      <div className="atmosphereBase" />
      <div className="atmosphereGlow atmosphereGlowA" />
      <div className="atmosphereGlow atmosphereGlowB" />
      <div className="atmosphereGrain" />
    </div>
  );
}
