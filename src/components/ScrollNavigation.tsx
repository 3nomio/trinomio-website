"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ScrollNavigationProps = {
  indexHref?: string;
  indexLabel?: string;
  menuHref: string;
  menuLabel?: string;
  ariaLabel?: string;
  threshold?: number;
};

export function ScrollNavigation({
  indexHref,
  indexLabel = "↑ Índice",
  menuHref,
  menuLabel = "← Menú",
  ariaLabel = "Navegación rápida",
  threshold = 560,
}: ScrollNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [threshold]);

  const controlClass =
    "inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_38px_rgba(0,0,0,0.28)] backdrop-blur transition hover:border-trinomio-cyan hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan";

  return (
    <nav
      aria-label={ariaLabel}
      className={`fixed bottom-4 right-4 z-40 flex max-w-[calc(100vw-2rem)] flex-wrap justify-end gap-2 transition duration-300 sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Link
        className={`${controlClass} border-trinomio-cyan/45 bg-trinomio-navy-glass`}
        href={menuHref}
      >
        {menuLabel}
      </Link>
      {indexHref ? (
        <Link
          className={`${controlClass} border-trinomio-cyan/55 bg-[linear-gradient(135deg,rgba(23,215,255,0.22),rgba(96,157,255,0.2))]`}
          href={indexHref}
        >
          {indexLabel}
        </Link>
      ) : (
        <button
          className={`${controlClass} border-trinomio-cyan/55 bg-[linear-gradient(135deg,rgba(23,215,255,0.22),rgba(96,157,255,0.2))]`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
        >
          {indexLabel}
        </button>
      )}
    </nav>
  );
}
