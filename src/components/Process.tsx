import { useState } from "react";
import type { JSX } from "react";
import { steps } from "../data/content.ts";

export const Process = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="cara-kerja" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#cb542d] uppercase">
            ALUR KERJA TRANSPARAN
          </span>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#222823] sm:text-4xl lg:text-5xl">
            Langkah Jelas. Hasil Berkelas.
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#697068]">
            Setiap fase pekerjaan terstruktur dengan output deliverables yang jelas dan terukur.
            Klik tahapan di bawah untuk melihat rincian prosesnya.
          </p>
        </div>

        {/* 4 Steps Interactive Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <article
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "border-[#cb542d] bg-white shadow-xl scale-[1.02]"
                    : "border-[#c9cec4] bg-transparent hover:border-[#cb542d]/60 hover:bg-[#efefe8]/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-3xl font-bold tracking-tight ${
                      isSelected ? "text-[#cb542d]" : "text-[#697068]"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="rounded-full bg-[#eaece4] px-2.5 py-0.5 text-[11px] font-semibold text-[#222823]">
                    {step.duration}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#222823] sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#697068]">
                  {step.description}
                </p>

                {/* Output Badge */}
                <div className="mt-6 border-t border-[#dedfd7] pt-4">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#cb542d]">
                    Output yang Diterima:
                  </span>
                  <span className="mt-1 block text-xs font-medium text-[#222823]">
                    {step.deliverable}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
