import Image from "next/image";
import Link from "next/link";

export const TRINOMIO_LOGO_SRC = "/logos/trinomio-logo-transparent.png";

type LogoProps = {
  ariaCurrent?: "page";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  height?: number;
  href?: string;
  showBackCue?: boolean;
  width?: number;
};

export function Logo({
  ariaCurrent,
  className,
  height = 60,
  href = "/es",
  imageClassName = "h-auto w-[120px] max-w-full object-contain",
  priority = false,
  showBackCue = false,
  width = 120,
}: LogoProps) {
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
        height={height}
        priority={priority}
        sizes={`${width}px`}
        src={TRINOMIO_LOGO_SRC}
        width={width}
      />
    </Link>
  );
}
