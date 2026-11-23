import type { JSX } from "react";
import { navigationItems } from "../data/content.ts";

const currentYear = new Date().getFullYear();

export const Footer = (): JSX.Element => {
  return (
    <footer className="border-t border-[#dedfd7] bg-[#f7f5f0] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand & Slogan */}
          <div>
            <a
              href="#top"
              className="text-2xl font-bold tracking-tight text-[#222823] sm:text-3xl"
              aria-label="Gemilang Construction beranda"
            >
              Gemilang Construction<span className="text-[#cb542d]">.</span>
            </a>
            <p className="mt-2 text-sm text-[#697068]">
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
                  className="font-medium text-[#222823] transition-colors hover:text-[#cb542d]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#konsultasi"
                className="font-medium text-[#cb542d] transition-colors hover:underline"
              >
                Konsultasi
              </a>
            </nav>
            <p className="text-xs text-[#697068]">
              © {currentYear} Gemilang Construction. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
