import Image from "next/image";
import Link from "next/link";

// Dark-background versions: "NOMI" and the spiral use a lighter blue so the
// whole wordmark stays legible on the navy site. The compact version drops the
// tagline for small placements (header, footer).
export const TRINOMIO_LOGO_SRC = "/logos/trinomio-logo-dark-bg.png";
export const TRINOMIO_LOGO_COMPACT_SRC = "/logos/trinomio-logo-compact-dark-bg.png";

const logoVariants = {
  full: { src: TRINOMIO_LOGO_SRC, width: 360, height: 84 },
  compact: { src: TRINOMIO_LOGO_COMPACT_SRC, width: 360, height: 57 },
} as const;

type LogoProps = {
  ariaCurrent?: "page";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  height?: number;
  href?: string;
  showBackCue?: boolean;
  variant?: keyof typeof logoVariants;
  width?: number;
};

export function Logo({
  ariaCurrent,
  className,
  height,
  href = "/es",
  imageClassName = "h-auto w-[120px] max-w-full object-contain",
  priority = false,
  showBackCue = false,
  variant = "full",
  width,
}: LogoProps) {
  const logo = logoVariants[variant];

  return (
    <Link
      className={[
        "trinomio-logo-link inline-flex max-w-full items-center gap-2.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      href={href}
      aria-current={ariaCurrent}
      aria-label={showBackCue ? "Volver al inicio de Trinomio" : "Trinomio home"}
      title={showBackCue ? "Volver al inicio" : "Trinomio home"}
    >
      {showBackCue ? (
        <span className="trinomio-logo-back-cue" aria-hidden="true">
          <svg
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3.5 5.5 8l4.5 4.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </span>
      ) : null}
      <Image
        alt="Trinomio"
        className={imageClassName}
        height={height ?? logo.height}
        priority={priority}
        // Largest rendered width across the site (home hero ~352px), so
        // high-density screens get a sharp file instead of an upscaled one.
        sizes="360px"
        quality={90}
        src={logo.src}
        width={width ?? logo.width}
      />
    </Link>
  );
}
