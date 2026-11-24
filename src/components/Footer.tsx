import type { JSX } from "react";
import { navigationItems } from "../data/content.ts";

const currentYear = new Date().getFullYear();

export const Footer = (): JSX.Element => {
  return (
    <footer className="border-t border-[#e2e8f0] bg-[#f8fafc] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand & Slogan */}
          <div>
            <a
              href="#top"
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
              aria-label="Gemilang Construction beranda"
            >
              <img
                src="/logo-gemilang.svg"
                alt="Logo Gemilang"
                className="h-10 w-auto sm:h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl leading-none">
                  GEMILANG<span className="text-[#3E5BA9]">.</span>
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-[#64748b] uppercase mt-1">
                  Konstruksi &amp; Fabrikasi Las
                </span>
              </div>
            </a>
            <p className="mt-3 text-sm text-[#64748b]">
              Solusi Terpercaya Bangun Rumah, Renovasi, &amp; Fabrikasi Las Besi / Baja.
            </p>
          </div>

          {/* Quick links & Copyright */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <nav aria-label="Navigasi footer" className="flex flex-wrap gap-6 text-sm">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-medium text-[#0f172a] transition-colors hover:text-[#3E5BA9]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#konsultasi"
                className="font-medium text-[#3E5BA9] transition-colors hover:underline"
              >
                Konsultasi
              </a>
            </nav>
            <p className="text-xs text-[#64748b]">
              © {currentYear} Gemilang Construction. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
