import { useState } from "react";
import type { JSX } from "react";
import { testimonials } from "../data/content.ts";

export const Testimonials = (): JSX.Element => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTesti = testimonials[activeIdx];

  return (
    <section id="ulasan" className="py-16 sm:py-24 bg-[#f1f5f9]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#3E5BA9] uppercase">
              BUKTI KEPUASAN KLIEN
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              Cerita Dari Mereka yang Telah Mempercayakan Hunian
            </h2>
          </div>
          <p className="max-w-xs text-base text-[#64748b]">
            Kepercayaan Anda adalah prioritas terbesar dari setiap pondasi yang kami bangun.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-white p-6 sm:p-10 shadow-lg border border-[#e2e8f0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image of the completed home */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md">
              <img
                src={activeTesti.homeImage}
                alt={activeTesti.projectType}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-[#0f172a]/90 text-white text-xs px-3 py-1.5 rounded-md backdrop-blur-sm">
                {activeTesti.projectType}
              </div>
            </div>

            {/* Right Quote & Author */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 text-lg">
                  {[...Array(activeTesti.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-4 text-lg sm:text-xl font-medium text-[#0f172a] leading-relaxed italic">
                  "{activeTesti.comment}"
                </blockquote>
              </div>

              {/* Author Info & Nav Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#e2e8f0] pt-5">
                <div className="flex items-center gap-4">
                  <img
                    src={activeTesti.avatar}
                    alt={activeTesti.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-[#3E5BA9]"
                  />
                  <div>
                    <h4 className="font-semibold text-[#0f172a]">{activeTesti.name}</h4>
                    <p className="text-xs text-[#64748b]">
                      {activeTesti.role} • {activeTesti.location}
                    </p>
                  </div>
                </div>

                {/* Tab Selector */}
                <div className="flex items-center gap-2">
                  {testimonials.map((t, idx) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`h-9 px-3.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeIdx === idx
                          ? "bg-[#3E5BA9] text-white shadow-sm"
                          : "bg-[#f8fafc] text-[#0f172a] hover:bg-[#e2e8f0]"
                      }`}
                    >
                      Klien {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
