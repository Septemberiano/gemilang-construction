import { useState } from "react";
import type { JSX } from "react";
import { services } from "../data/content.ts";

export const Services = (): JSX.Element => {
  const [activeCard, setActiveCard] = useState<string | null>("01");

  return (
    <section id="layanan" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#3E5BA9] uppercase">
              LAYANAN KAMI
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              Satu mitra untuk
              <br />
              setiap rencana Anda.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#64748b]">
            Layanan konstruksi dan arsitektur menyeluruh: desain 2D/3D, estimasi RAB terbuka,
            pengawasan profesional harian, dan garansi pemeliharaan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const isExpanded = activeCard === service.number;
            return (
              <article
                key={service.number}
                onClick={() => setActiveCard(isExpanded ? null : service.number)}
                className={`group flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? "border-[#3E5BA9] bg-white shadow-xl scale-[1.01]"
                    : "border-[#e2e8f0] bg-[#f8fafc] hover:border-[#3E5BA9]/40 hover:bg-white hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#3E5BA9]">{service.number}</span>
                    <span
                      aria-hidden="true"
                      className={`text-xl transition-transform duration-300 ${
                        isExpanded ? "rotate-90 text-[#3E5BA9]" : "text-[#64748b] group-hover:text-[#3E5BA9]"
                      }`}
                    >
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#0f172a] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                    {service.description}
                  </p>

                  {/* Checklist Features */}
                  <div className="mt-6 space-y-2.5 border-t border-[#e2e8f0] pt-5">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#0f172a]">
                        <span className="text-[#3E5BA9] font-bold">✓</span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-[#e2e8f0] pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0f172a]">{service.note}</span>
                  <a
                    href="#konsultasi"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-[#3E5BA9] hover:underline"
                  >
                    Konsultasi &rarr;
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
