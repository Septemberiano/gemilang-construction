import { useState } from "react";
import type { JSX } from "react";
import { navigationItems } from "../data/content.ts";

export const Navbar = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dedfd7] bg-[#f7f5f0]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#top"
          className="text-2xl font-bold tracking-tight text-[#222823] transition-opacity hover:opacity-80 sm:text-[28px]"
          aria-label="Gemilang Construction beranda"
        >
          Gemilang Construction<span className="text-[#cb542d]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-[#222823] transition-colors hover:text-[#cb542d]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#transformasi"
            className="inline-flex h-11 items-center justify-center rounded-md border border-[#dedfd7] bg-[#eaece4] px-4 text-xs font-semibold text-[#222823] transition-colors hover:bg-[#dfe2d7]"
          >
            Sebelum &amp; Sesudah
          </a>
          <a
            href="#konsultasi"
            className="inline-flex h-11 items-center justify-center rounded-md bg-[#cb542d] px-5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#b84825] hover:shadow"
          >
            Konsultasi gratis &nbsp;↗
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#222823] transition-colors hover:bg-[#eaece4] focus:outline-none focus:ring-2 focus:ring-[#cb542d] lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Buka menu navigasi"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#dedfd7] bg-[#f7f5f0] px-4 pt-2 pb-6 lg:hidden">
          <nav className="flex flex-col gap-2.5">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-[#222823] hover:bg-[#eaece4]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#transformasi"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-md border border-[#dedfd7] bg-[#eaece4] text-xs font-semibold text-[#222823]"
              >
                Lihat Transformasi Ruang
              </a>
              <a
                href="#konsultasi"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-md bg-[#cb542d] text-center text-sm font-semibold text-white shadow transition-colors hover:bg-[#b84825]"
              >
                Konsultasi gratis ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
