"use client";

import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  mobileLabel?: string;
  href: string;
};

type HeaderProps = {
  navItems: readonly NavItem[];
};

function normalizePath(path: string) {
  const [pathWithoutHash] = path.split("#");
  const [pathname] = pathWithoutHash.split("?");

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function isActivePath(pathname: string, href: string) {
  const currentPath = normalizePath(pathname);
  const itemPath = normalizePath(href);

  if (itemPath === "/") {
    return currentPath === itemPath;
  }

  return currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
}

export function Header({ navItems }: HeaderProps) {
  const pathname = usePathname();
  const isHomeActive = normalizePath(pathname) === "/es";

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-trinomio-navy-deep/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <Logo
          ariaCurrent={isHomeActive ? "page" : undefined}
          className={cn(
            "shrink-0 px-2.5 py-2",
            isHomeActive &&
              "border-trinomio-cyan/45 bg-white/[0.095] shadow-[inset_0_-1px_0_rgba(23,215,255,0.5)]",
          )}
          imageClassName="h-auto w-[112px] max-w-full object-contain sm:w-[120px]"
          priority
          showBackCue
        />
        <nav
          aria-label="Navegación principal"
          className="flex w-full min-w-0 flex-wrap items-center gap-2 text-[0.8125rem] text-[#E2E6E9]/92 sm:gap-3 sm:text-sm lg:w-auto lg:flex-1 lg:justify-end lg:gap-5 xl:gap-6"
        >
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative min-h-10 min-w-0 whitespace-normal border border-white/10 bg-white/[0.025] px-3 py-2 transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan hover:underline hover:decoration-trinomio-cyan/60 hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan lg:min-h-0 lg:whitespace-nowrap lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:hover:underline-offset-8",
                  isActive &&
                    "border-trinomio-cyan/35 bg-white/[0.075] text-white shadow-[inset_0_-1px_0_rgba(23,215,255,0.58)] lg:bg-transparent lg:shadow-none lg:after:absolute lg:after:-bottom-2 lg:after:left-0 lg:after:h-px lg:after:w-full lg:after:bg-trinomio-cyan/70 lg:after:content-['']",
                )}
                href={item.href}
                key={item.href}
              >
                {item.mobileLabel ? (
                  <>
                    <span className="lg:hidden">{item.mobileLabel}</span>
                    <span className="hidden lg:inline">{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
