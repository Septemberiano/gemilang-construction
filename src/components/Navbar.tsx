import { useState } from "react";
import type { JSX } from "react";
import { navigationItems } from "../data/content.ts";

export const Navbar = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e2e8f0] bg-[#f8fafc]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand with Logo */}
        <a
          href="#top"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Gemilang Construction beranda"
        >
          <img
            src="/logo-gemilang.svg"
            alt="Logo Gemilang"
            className="h-10 w-auto sm:h-11 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0f172a] leading-none">
              GEMILANG<span className="text-[#3E5BA9]">.</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#64748b] uppercase mt-0.5">
              Konstruksi &amp; Fabrikasi Las
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-[#0f172a] transition-colors hover:text-[#3E5BA9]"
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
            className="inline-flex h-11 items-center justify-center rounded-md border border-[#e2e8f0] bg-[#f1f5f9] px-4 text-xs font-semibold text-[#0f172a] transition-colors hover:bg-[#e2e8f0]"
          >
            Sebelum &amp; Sesudah
          </a>
          <a
            href="#konsultasi"
            className="inline-flex h-11 items-center justify-center rounded-md bg-[#3E5BA9] px-5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#2F4687] hover:shadow"
          >
            Konsultasi gratis &nbsp;↗
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#0f172a] transition-colors hover:bg-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#3E5BA9] lg:hidden"
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
        <div className="border-b border-[#e2e8f0] bg-[#f8fafc] px-4 pt-2 pb-6 lg:hidden">
          <nav className="flex flex-col gap-2.5">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-[#0f172a] hover:bg-[#f1f5f9]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#transformasi"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-md border border-[#e2e8f0] bg-[#f1f5f9] text-xs font-semibold text-[#0f172a]"
              >
                Lihat Transformasi Ruang
              </a>
              <a
                href="#konsultasi"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-md bg-[#3E5BA9] text-center text-sm font-semibold text-white shadow transition-colors hover:bg-[#2F4687]"
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
