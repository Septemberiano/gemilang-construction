import { useState, useEffect } from "react";
import type { JSX } from "react";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1774199496664-a9690967be5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

const ROTATING_WORDS = [
  "khawatir.",
  "ribet.",
  "ragu.",
  "biaya siluman.",
  "drama renovasi.",
];

export const Hero = (): JSX.Element => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFadeState("in");
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline & CTA */}
          <div className="flex flex-col lg:col-span-6 xl:col-span-7">
            {/* Live active consultation pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#cb542d]/10 px-3.5 py-1.5 text-xs font-semibold text-[#cb542d] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cb542d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cb542d]" />
              </span>
              <span>KONTRAKTOR BANGUNAN &amp; JASA LAS FABRIKASI BESI</span>
            </div>

            <h1 className="mt-5 text-4xl font-medium tracking-tight text-[#222823] sm:text-5xl lg:text-6xl xl:text-7xl">
              Bangun impian.
              <br />
              Tanpa rasa
              <br />
              <span className="inline-block min-h-[1.2em]">
                <em
                  className={`font-serif italic text-[#cb542d] inline-block transition-all duration-300 transform ${
                    fadeState === "in"
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-2 scale-95"
                  }`}
                >
                  {ROTATING_WORDS[wordIndex]}
                </em>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#697068] sm:text-lg">
              Solusi satu atap dari <strong>Gemilang Construction</strong>: bangun rumah baru, renovasi total, hingga
              fabrikasi las besi (kanopi, pagar, railing tangga, dan konstruksi rangka baja). Terencana, rapi, dan transparan.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#konsultasi"
                className="inline-flex h-13 items-center justify-center rounded-md bg-[#cb542d] px-7 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#b84825] hover:shadow-md hover:-translate-y-0.5"
              >
                Konsultasi Gratis Sekarang &nbsp;↗
              </a>
              <a
                href="#transformasi"
                className="inline-flex h-13 items-center justify-center rounded-md border border-[#dedfd7] bg-[#eaece4] px-6 text-sm font-semibold text-[#222823] transition-all hover:bg-[#dfe2d7] hover:-translate-y-0.5"
              >
                Lihat Transformasi Ruang &nbsp;↓
              </a>
            </div>

            {/* Trust Metrics Grid */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#dedfd7] pt-6">
              <div className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-[#222823] transition-colors group-hover:text-[#cb542d]">
                  120+
                </div>
                <div className="text-xs text-[#697068] mt-1 font-medium">Proyek Bangun &amp; Las</div>
              </div>
              <div className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-[#222823] transition-colors group-hover:text-[#cb542d]">
                  100%
                </div>
                <div className="text-xs text-[#697068] mt-1 font-medium">Sesuai Kontrak RAB</div>
              </div>
              <div className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-[#222823] transition-colors group-hover:text-[#cb542d]">
                  10 Thn
                </div>
                <div className="text-xs text-[#697068] mt-1 font-medium">Garansi Struktur &amp; Las</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Cards */}
          <div className="lg:col-span-6 xl:col-span-5">
            <figure className="relative overflow-hidden rounded-2xl bg-[#222823] shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
              <img
                src={HERO_IMAGE_URL}
                alt="Gemilang Construction - Kontraktor & Bengkel Las Profesional"
                className="h-[400px] w-full object-cover sm:h-[480px] lg:h-[550px] transition-transform duration-700 hover:scale-105"
                loading="eager"
              />

              {/* Tag / Badge */}
              <div className="absolute top-4 left-4 rounded-full bg-[#f7f5f0]/95 px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-[#222823] shadow-md backdrop-blur-sm">
                GEMILANG CONSTRUCTION
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute top-4 right-4 rounded-lg bg-[#222823]/80 px-3 py-1.5 text-[11px] font-medium text-white shadow-md backdrop-blur-sm hidden sm:block">
                ★ Bangunan &amp; Las Besi
              </div>

              {/* Caption Overlay */}
              <figcaption className="absolute right-4 bottom-4 left-4 rounded-xl bg-[#222823]/95 p-5 text-white backdrop-blur-md border border-white/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <strong className="block text-sm font-semibold text-white sm:text-base">
                    Konstruksi Kuat, Hasil Estetis.
                  </strong>
                  <span className="text-xs text-[#dfa17d] font-bold">SNI Quality</span>
                </div>
                <span className="mt-1 block text-xs text-[#c9cec7] leading-relaxed">
                  Mitra terpercaya untuk pembangunan rumah, renovasi, kanopi, dan fabrikasi pagar besi.
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
